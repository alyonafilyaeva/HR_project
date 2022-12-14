import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ActiveResume = (props) => {
    let { authToken, user } = useContext(AuthContext)
    const location = useLocation();
    let path = `/resume/edit/${location.state.id}`
    let nav = useNavigate()

    let notPublish = () => {
        let data = location.state
        data.status = 'N_P'
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/resumes/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            },
            data: data
        })
            .then(response => {
                console.log(response.data)
            })
    }
    let publish = () => {
        let data = location.state
        data.status = 'Y_P'
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/resumes/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            },
            data: data
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    nav('/resumes')
                }
            })
    }

    let sendRequest = () => {
        let data = {
            status: '2',
            destination: location.state.user.id
        }
        axios({
            method: "post",
            url: `http://127.0.0.1:8000/api/requests/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            data: data
        })
            .then(response => console.log(response.data))
    }

    return (
        <div >
            <NavLink to="/resumes" className='back'>&#x2190; ??????????</NavLink>
            {location.state.user.id == user.id && <NavLink to={path} state={location.state} className='grey edit'>??????????????????????????</NavLink>}
            <div className="active_resume">
                <div className="active_block resume">
                    <div className="active_info">
                        <h2 className="active_block_item">{location.state.user.full_name}</h2>
                        <p className="active_block_item">Email: {location.state.user.email}</p>
                        <p className="active_block_item">???????????????? ????????????????: {location.state.salary} ??????</p>
                        <p className="active_block_item">???????? ????????????: {location.state.exp_work}</p>
                        <section>{location.state.about_me}</section>
                        
                    </div>
                    <div className="active_files">
                        <img className='photo' src={location.state.image} />
                        <a href={location.state.file} download target='_blank' className="grey see">???????????????? ????????????</a>
                    </div>
                </div>
            </div>
            {location.state.user.id !== user.id && <button onClick={sendRequest} className="btn orange">?????????????????? ????????????</button>}
            {(location.state.user.id === user.id && location.state.status !== 'Y_P') && <button className="btn orange" onClick={publish}>????????????????????????</button>}
            {(location.state.user.id === user.id && location.state.status === 'Y_P') && <button className="btn orange" onClick={notPublish}>?????????? ?? ????????????????????</button>}
        </div>
    )

}

export default ActiveResume;