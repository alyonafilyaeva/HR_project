import React, { useLayoutEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const EditProfile = (props) => {
    console.log(props)
    const location = useLocation()
    let name = React.createRef()
    let email = React.createRef()
    let tel = React.createRef()
    let image = React.createRef()
    let file = React.createRef()
    const nav = useNavigate()
    let [telError, setTelError] = useState()
    let { authToken, user, updateUser, logoutUser, setUser } = useContext(AuthContext)

    useLayoutEffect(() => {

        axios.get(`/api/profile`, {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        }).then(response => {

            console.log(response.data)
        })
    }, [])

    let onEditProfile = (e) => {
        e.preventDefault()

        axios
            .put(`/api/profile/`,
                {
                    "email": email.current.value,
                    "full_name": name.current.value,
                    "phone_number": tel.current.value,
                     "image": 'https://s10.stc.yc.kpcdn.net/share/i/12/11065821/wr-960.webp'
                    /* "file": file.current.value,
                    "image": file.current.value, */


                },
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    }
                })
            .then(response => {
                if (response.status === 200) {
                    updateUser(response.data.user)
                    nav('/profile')
                }
            })
            .catch(error => console.log(error.response))
    }

    let onProfileChange = () => {
        let reTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        /* if (!reTel.test(telProfile)) {
            setTelError('Неверное значение')
        } */
        let nameProfile = name.current.value;
        let emailProfile = email.current.value;
        let telProfile = tel.current.value
        props.ChangeProfile(nameProfile, emailProfile, telProfile)
    }

    return (
        <div className="container">
            <h3>Редактировать профиль</h3>
            <NavLink to={`/profile`} className='back'>Назад</NavLink>
            <div className="cart">
                <div >
                    <p className="name_user">{user.full_name}</p>
                    <p className="name_role">{user.is_header_dep ? 'Глава департамента' : 'Сотрудник'}</p>
                    <div className="form_photo">
                        <div className="edit_data">
                            <form className="edit_form">
                                <p>Фамилия Имя Отчество</p>
                                <input onChange={onProfileChange} /* type="text" */ ref={name} value={props.profilePage.newName} className="profile-input"></input>
                                <p>E-mail: </p>
                                <input onChange={onProfileChange} type="email" ref={email} value={props.profilePage.newEmail} className="profile-input"></input>
                                {telError}
                                <p>Телефон: </p>
                                <input onChange={onProfileChange} type="tel" ref={tel} value={props.profilePage.newTel} pattern="[0-9]" className="profile-input"></input>
                            </form>
                        </div>
                        <div className="photo">
                            <img src={user.image}/>
                            
                        </div>
                    </div>

                    <div>
                        <button onClick={onEditProfile} className='orange save_profile'>Сохранить</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditProfile;