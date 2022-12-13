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
            <div className='search text-field__icon text-field__icon_search'>
                <input type="text" placeholder="Поиск по резюме"></input>
                <div className='sorts_btns'>
                <button className="sorts-top_btn clear">Очистить</button>
                <button onClick={onAddSort} className="sorts-top_btn apply">Применить</button>
                </div>
                
            </div>
            <div className="sorts">
                <input className="parametr" placeholder="Сортировать" onChange={onSortsChange} type='text' name='sort' ref={sort} value={props.vacansiesPage.sort}></input>
                <input className="parametr" placeholder="Зарплата от" onChange={onSortsChange} type='number' name='salary' ref={salary} value={props.vacansiesPage.salary}></input>
                <input className="parametr" placeholder="Опыт работы от" onChange={onSortsChange} type='number' name='exp' ref={exp} value={props.vacansiesPage.exp}></input>
                <input className="parametr" placeholder="Департамент" onChange={onSortsChange}  name='dep' ref={dep} value={props.vacansiesPage.dep}></input>
            </div>
        </div>

    )
}

export default SortsVacansies;