import React, { useContext } from 'react'
import OpenBlock from './OpenBlock';
import AuthContext from "../../context/AuthContext";

const ProfileHeader = (props) => {
    const [open, setOpen] = React.useState(false)
    let { user } = useContext(AuthContext)
    let handleClick = () => setOpen(!open)
    return (
        <div className="profile">
            <div className='info'>
                <img onClick={handleClick} src={user.image}></img>
            </div>
            {open && <OpenBlock />}
        </div>

    )
}

export default ProfileHeader;