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
    let image = React.createRef()
    let file = React.createRef()



    const nav = useNavigate()
    let { authToken, user, updateUser, logoutUser, setUser } = useContext(AuthContext)

    useLayoutEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/profile`, {
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
            .put(`http://127.0.0.1:8000/api/profile/`,
                {
                    "email": email.current.value,
                    "full_name": name.current.value,
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
        let nameProfile = name.current.value;
        let emailProfile = email.current.value;
        props.ChangeProfile(nameProfile, emailProfile)
    }

    return (
        <div>
            <h3>Редактировать профиль</h3>
            <NavLink to={`/profile`} className='back'>&#x2190; Назад</NavLink>
            <div className="cart">
                <div >
                    <p className="name_user">{user.full_name}</p>
                    <p className="name_role">{user.is_header_dep ? 'Глава департамента' : 'Сотрудник'}</p>
                    <div className="form_photo">
                        <div className="edit_data">
                            <form className="edit_form">
                                <p>Фамилия Имя Отчество</p>
                                <input onChange={onProfileChange} type="text" ref={name} value={props.profilePage.newName}></input>
                                <p>E-mail: </p>
                                <input onChange={onProfileChange} type="email" ref={email} value={props.profilePage.newEmail}></input>
                                <p>Телефон: </p>
                                <input type="tel"></input>
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