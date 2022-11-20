import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/app.css"

const AddVacansie = (props) => {
    console.log(props.vacansies)
    const [status, setStatus] = React.useState('0')
    let title = React.createRef()
    let text = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    

    let onAddVac = (e) => {
        e.preventDefault()
        props.AddVacansie()
        setStatus('1')
    }

    let onVacChange = () => {
        let titleVac = title.current.value;
        let textVac = text.current.value;
        let salaryVac = salary.current.value;
        let expVac = exp.current.value;
        props.ChangeVacansie(titleVac, salaryVac, expVac, textVac)
    }
    debugger;
    return (
        <div>
            {status === '1' && <button>редактировать</button>}
            <form>
                <p>Название вакансии:</p>
                {status === '0' ? <input onChange={onVacChange} type='text' name='title' ref={title} value={props.newVacTitle}/> : <p>{props.vacansies[1].title}</p>}
                {/* <input onChange={onVacChange} type='text' name='title' ref={title} value={props.newVacTitle}/> */}
                <p>департамент</p>
                <p>из бд</p>
                <p>Мин зарплата</p>
                <input onChange={onVacChange} type='text' name='salary' ref={salary} value={props.newVacSalery}/>
                <p>Стаж работы</p>
                <input onChange={onVacChange} type='text' name='salary' ref={exp} value={props.newVacExp}/>
                <p>Описание вакансии</p>
                <textarea onChange={onVacChange} type='text' name="text" ref={text} value={props.newVacText}/>
                <button onClick={onAddVac}>Создать вакансию</button>
            </form>
            {/* <NavLink to="/vacansies/new_vacansie/see"onClick={onAddVac}>Создать вакансию</NavLink> */}
        </div>
    )
}

export default AddVacansie;