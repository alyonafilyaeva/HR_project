import React, { useLayoutEffect }  from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../Styles/app.css"
import axios from "axios"
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";

const EditVacansie = (props) => {
    const location = useLocation();
    const [status, setStatus] = React.useState('0')
    let title = React.createRef()
    let text = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let { authToken } = useContext(AuthContext)

    useLayoutEffect(() => {
        console.log(location.state.id)
        axios.get(`http://127.0.0.1:8000/api/vacancies/${location.state.id}`, {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        }).then(response => {
            props.EditVacansie(response.data)
            console.log(response.data)
        })
    }, [])
    
        let pop = location.state.title
    
   
    let onEditVac = (e) => {
        e.preventDefault()
        axios
        .put(`http://127.0.0.1:8000/api/vacancies/${location.state.id}/`, 
        {
            "title":  pop,
            "description": text.current.value,
            "exp_work": exp.current.value,
            "salary": salary.current.value,
            "status": 'Y_P'
        }, 
        {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error.response))
        console.log(title)
    }

    let onVacChange = () => {
        let titleVac = title.current.value;
        let textVac = text.current.value;
        let salaryVac = salary.current.value;
        let expVac = exp.current.value;
        props.ChangeVacansie(titleVac, salaryVac, expVac, textVac)
    }

    return (
        <div>
            {status === '1' && <button onClick={() => {setStatus('0')}}>редактировать</button>}
            <form>
                <p>Название вакансии:</p>
                <input onChange={onVacChange} type='text' name='title' ref={title} value={props.newVacTitle} placeholder={location.state.title}/> 
                {/* <input onChange={onVacChange} type='text' name='title' ref={title} value={props.newVacTitle}/> */}
                <p>департамент</p>
                <p>{location.state.department}</p>
                <p>Мин зарплата</p>
                <input onChange={onVacChange} type='text' name='salary' ref={salary} value={props.newVacSalary} placeholder={location.state.salary}/> 

                <p>Стаж работы</p>
                <input onChange={onVacChange} type='text' name='exp' ref={exp} value={props.newVacExp} placeholder={location.state.exp_work}/> 

                <p>Описание вакансии</p>
                <textarea onChange={onVacChange} type='text' name="text" ref={text} value={props.newVacText} placeholder={location.state.description}/> 

                <button onClick={onEditVac} >Опубликовать вакансию</button>
            </form>
            {/* <NavLink to="/vacansies/new_vacansie/see"onClick={onAddVac}>Создать вакансию</NavLink> */}
        </div>
    )
}

export default EditVacansie;