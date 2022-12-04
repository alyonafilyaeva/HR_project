import React from 'react'
import { NavLink } from "react-router-dom";
import OpenBlock from './OpenBlock';

const ProfileHeader = (props) => {
    const [open, setOpen] = React.useState(false)
    let handleClick = () => setOpen(true)
    return(
        <div className="profile">
            <div className='info'>
                <p>{props.profilePage.user.full_name}</p>
                <img onClick={handleClick} src='https://thumbs.dreamstime.com/b/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%B8%D0%BA%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B-179835761.jpg'></img>
            </div>
            {/* <div>
                <NavLink to="/profile">Профиль</NavLink>
                <NavLink to="/auth/login">Выйти</NavLink>
            </div> */}
            {/* <img src="\imgs\up.png"></img> */}
            {open && <OpenBlock /> }
        </div>
    )
}

export default ProfileHeader;