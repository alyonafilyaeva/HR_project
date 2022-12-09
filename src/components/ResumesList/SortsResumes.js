import React from 'react'
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const SortsVacansies = (props) => {
    console.log(props)
    let sort = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let dep = React.createRef()
    let { authToken } = useContext(AuthContext)

    let onAddSort = (e) => {
        let path = ''
        e.preventDefault()
        if (props.vacansiesPage.exp !== '') {
            path = `http://127.0.0.1:8000/api/vacancies?exp_work=${props.vacansiesPage.exp}`
        }

        if (props.vacansiesPage.salary !== '') {
            path = `http://127.0.0.1:8000/api/vacancies?salary=${props.vacansiesPage.salary}`
        }
        
        axios
        .get(path, 
        {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }

        })
        .then(response => props.setVacansies(response.data))
        .catch(error => console.log(error.response))
    }

    let onSortsChange = () => {
        let sortValue = sort.current.value;
        let salaryValue = salary.current.value;
        let expValue = exp.current.value;
        let depValue = dep.current.value;
        props.changeSorts(sortValue, salaryValue, expValue, depValue)
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="Поиск по вакансии"></input>
                <button className="vacansies-top__btn">Очистить</button>
                <button onClick={onAddSort} className="vacansies-top__btn">Применить</button>
            </div>
            <div className="sorts">
                <input placeholder="Сортировать" onChange={onSortsChange} type='text' name='sort' ref={sort} value={props.vacansiesPage.sort}></input>
                <input placeholder="Зарплата от" onChange={onSortsChange} type='text' name='salary' ref={salary} value={props.vacansiesPage.salary}></input>
                <input placeholder="Опыт работы от" onChange={onSortsChange} type='text' name='exp' ref={exp} value={props.vacansiesPage.exp}></input>
                <input placeholder="Департамент" onChange={onSortsChange} type='text' name='dep' ref={dep} value={props.vacansiesPage.dep}></input>
            </div>
        </div>

    )
}

export default SortsVacansies;