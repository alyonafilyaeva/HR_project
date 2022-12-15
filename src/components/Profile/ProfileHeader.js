import React, { useContext } from 'react'
import OpenBlock from './OpenBlock';
import AuthContext from "../../context/AuthContext";

const ProfileHeader = (props) => {
    const [open, setOpen] = React.useState(false)
    let { user } = useContext(AuthContext)
    let handleClick = () => setOpen(!open)
    return(
        <div className="profile">
            <div className='info'>
                <h4>{user.full_name}</h4>
                <img onClick={handleClick} src={user.image}></img>
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