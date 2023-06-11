import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SkillsContainer from "../skills/SkillsContainer";
import SuccessAlert from "../Alerts/SuccessAlert";
import WarningAlert from "../Alerts/WarningAlert";
import InfoAlert from "../Alerts/InfoAlert";

const ActiveResume = (props) => {
    let { authToken, user } = useContext(AuthContext)
    const location = useLocation();
    let path = `/resume/edit/${location.state.id}`
    let nav = useNavigate()
    let skillsOfVacansie = location.state.skills
    let [response, setResponse] = useState(0)
    setTimeout(() => {
        setResponse(0);
    }, 6000);

    function plural(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    
    var declension = ['год', 'года', 'лет'];
    let notPublish = () => {
        let data = location.state
        data.status = 0
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
        data.status = 1
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
                if (response.status === 200) {

                    nav('/resumes')
                }
            })
    }

    let sendRequest = () => {
        setResponse('info')
        let data = {
            status: '2',
            destination: location.state.user.id,
            id: location.state.id
        }
        axios({
            method: "post",
            url: `http://127.0.0.1:8000/api/requests/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            data: data
        })
            .then(response => {
                setResponse(response.status)
                console.log(response)
                if (response.status === 200) {
                    console.log(response.data)

                }
                if (response.data.err) {
                    setResponse('err')
                }
            })
    }

    return (
        <div className="container">
            {(location.state.user.id == user.id && location.state.status !== 'Y_P') &&
                <div>
                    <div className="steps">
                        <h3>Черновик резюме</h3>
                        <p><span>Шаг 2</span> из 3</p>
                    </div>
                    <div className="bar_2"></div>
                </div>
            }
            {(location.state.user.id == user.id && location.state.status === 'Y_P') &&
                <div>
                    <div className="steps">
                        <h3>Резюме опубликовано</h3>
                        <p><span>Шаг 3</span> из 3</p>
                    </div>
                    <div className="bar_3"></div>
                </div>
            }
            <a onClick={() => nav(-1)} className='back'>Назад</a>

            {location.state.user.id == user.id && <NavLink to={path} state={location.state} className='grey edit_resume'>Редактировать</NavLink>}
            <div className="active_resume">
                <div className="active_block_resume ">
                    <div className="active_info">
                        <h2 className="active_block_item">{location.state.user.full_name}</h2>
                        <div className="active_block_item">
                            <p className="item_title">Email: </p>
                            <p>{location.state.user.email}</p>
                        </div>
                        <div className="active_block_item">
                            <p className="item_title">Желаемая зарплата: </p>
                            <p>{location.state.salary} руб.</p>
                        </div>
                        <div className="active_block_item">
                            <p className="item_title">Опыт работы:</p>
                            <p>{location.state.exp_work} {plural(location.state.exp_work, declension)}</p>
                        </div>
                        <div className="active_block_item">
                            <p className="item_title">Компетенции:</p>
                            <p><SkillsContainer realskills={skillsOfVacansie} /></p>
                            <div className="active_block_item">
                            </div>
                        </div>
                        <p>{location.state.about_me}</p>

                    </div>
                    <div className="active_files">
                        <img className='photo' src={location.state.image} />
                        {/* <a href={location.state.file} download target='_blank' className="see grey">Смотреть резюме</a> */}
                    </div>
                </div>
            </div>
            {location.state.user.id !== user.id &&
                <div className="send_request_resume">
                    {response == 200 && <SuccessAlert />}
                    {response == 'err' && <WarningAlert />}
                    {response == 'info' && <InfoAlert />}
                    <div className="request-hover">
                    <button onClick={sendRequest} className="btn_resume orange ">Откликнуться</button>
                    <p className="send_alert_resume">Сотруднику будет отправлено письмо, что вы заинтересовались его резюме. </p>
                    </div>
                    
                </div>

            }
            {(location.state.user.id === user.id && location.state.status !== 'Y_P') && <button className="btn_resume orange " onClick={publish}>Опубликовать</button>}
            {(location.state.user.id === user.id && location.state.status === 'Y_P') && <button className="btn_resume orange " onClick={notPublish}>Снять с публикации</button>}
        </div>
    )

}

export default ActiveResume;