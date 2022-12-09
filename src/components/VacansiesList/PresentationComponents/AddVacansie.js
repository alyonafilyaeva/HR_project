import React  from "react";
import { NavLink } from "react-router-dom";
import "../../../Styles/app.css"
import axios from "axios"
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";

const AddVacansie = (props) => {
    console.log(props)
    const [status, setStatus] = React.useState('0')
    let title = React.createRef()
    let text = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let { authToken } = useContext(AuthContext)

    let onAddVac = (e) => {
        e.preventDefault()
        setStatus('1')
        props.AddVacansie()
        console.log(props.vacansies)

        axios
        .post("http://127.0.0.1:8000/api/vacancies/", 
        {
            "title": title.current.value,
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
    }

    let onVacChange = () => {
        let titleVac = title.current.value;
        let textVac = text.current.value;
        let salaryVac = salary.current.value;
        let expVac = exp.current.value;
        props.ChangeVacansie(titleVac, salaryVac, expVac, textVac)
    }
    let path = `/vacansie/edit/${props.ID}`
    console.log(props.newVacTitle)
    return (
        <div>
            {status === '1' && <NavLink to={path} state={props.vacansies[0]}>редактировать</NavLink>}
            <form>
                <p>Название вакансии:</p>
                {status === '0' ? <input onChange={onVacChange} type='text' name='title' ref={title} value={props.newVacTitle}/>
                : <p>{props.vacansies[0].title}</p>} 
                <p>департамент</p>
                <p>из бд</p>
                <p>Мин зарплата</p>
                {status === '0' ? <input onChange={onVacChange} type='text' name='salary' ref={salary} value={props.newVacSalery}/> 
                : <p>{props.vacansies[0].salary}</p>}

                <p>Стаж работы</p>
                {status === '0' ? <input onChange={onVacChange} type='text' name='salary' ref={exp} value={props.newVacExp}/>
                : <p>{props.vacansies[0].exp_work}</p>} 

                <p>Описание вакансии</p>
                {status === '0' ? <textarea onChange={onVacChange} type='text' name="text" ref={text} value={props.newVacText}/>
                : <p>{props.vacansies[0].description}</p>} 

                <button onClick={onAddVac} >Создать вакансию</button>
            </form>
        </div>
    )
}

export default AddVacansie;