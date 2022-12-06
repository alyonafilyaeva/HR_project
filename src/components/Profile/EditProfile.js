import React, { useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
    let { authToken } = useContext(AuthContext)

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
        .then(response => console.log(response.data))
        .catch(error => console.log(error.response))
    }

    let onProfileChange = () => {
        let nameProfile = name.current.value;
        let emailProfile = email.current.value;
        props.ChangeProfile( nameProfile, emailProfile)
    }

    return(
        <div>
            <p>Профиль</p>
            <div className="cart">
                <div >
                    <p>{props.user.full_name}</p>
                    <p>{props.user.is_header_dep ? 'Глава департамента': 'Сотрудник'}</p>
                    <div className="data">
                        <form>
                            <p>Фамилия Имя Отчество</p>
                            <input onChange={onProfileChange} type="text" ref={name} value={props.profilePage.newName}></input>
                            <p>E-mail: </p>
                            <input onChange={onProfileChange} typy="email" ref={email} value={props.profilePage.newEmail}></input>
                            <p>Телефон: </p>
                            <input type="tel"></input>
                        </form>
                        
                    </div>
                    <div>
                        <button onClick={onEditProfile}>Сохранить</button>
                    </div>
                </div>
                <div>
                    {props.user.image}
                </div>
            </div>
        </div>
    )
}

export default EditProfile;