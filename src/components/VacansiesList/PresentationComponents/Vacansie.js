import React, { useContext, useState } from "react";
import { NavLink} from "react-router-dom";
import Skills from "../../skills/Skills";
import SkillsContainer from "../../skills/SkillsContainer";
import LinesEllipsis from 'react-lines-ellipsis'
import favourite from '../../../imgs/favourite.png'
import favourite2 from '../../../imgs/favourite2.png'
import axios from "axios";
import AuthContext from "../../../context/AuthContext";

const Vacansie = (props) => {
    let path = `/vacansie/${props.vacansie.id}`
    let skillsOfVacansie = props.vacansie.skills
    let { authToken, user } = useContext(AuthContext)
    let [isFavourite, setIsFavourite] = useState(props.vacansie.users != undefined ? props.vacansie.users.includes(user.id) : false)
    let id = props.vacansie.id
    console.log(isFavourite)
    let toFavourite = () => {
        console.log('s')
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/vacancies/to_favorite/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                id: id
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    
                }
            })
            .catch(error => console.log(error.response))
        setIsFavourite(!isFavourite)
    }
    
    return (
        <div className="vacansie row">
            <NavLink  to={path} state={props.vacansie} >
            <div  className="vacansie-item" >
                <div className="vacansie-top">
                    <h2>{props.vacansie.title}</h2>
                    <p className="blur">{props.vacansie.data_updated}</p>
                </div>
                <p>{props.vacansie.salary_from} - {props.vacansie.salary_to} руб</p>
                <p>Опыт работы: {props.vacansie.exp_work}</p>
                <p><SkillsContainer realskills={skillsOfVacansie} /></p>
                <LinesEllipsis text={props.vacansie.description} maxLine={3} className="blur"/>
            </div>
            </NavLink>
            <div className="vacansie-right">
                <p>Департамент</p>
                <p className="blur">{props.vacansie.department}</p>
                <p>Глава департамента</p>
                <p className="blur">{props.vacansie.user.full_name}</p>
                {props.vacansie.status == 1 && <img src={isFavourite ? favourite2 : favourite} className="favourite" onClick={ toFavourite}></img>}
                <p className="blur">{props.vacansie.status == 0 && 'Не опубликовано'}</p>
            </div>
        </div>
        

    )

}

export default Vacansie;