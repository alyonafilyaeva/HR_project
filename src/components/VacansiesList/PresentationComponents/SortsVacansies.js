import React, { useLayoutEffect, useState } from 'react'
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";

const SortsVacansies = (props) => {
    let [salary, setSalary] = useState('')
    let [exp_work, setExp_Work] = useState('')
    let [sort, setSort] = useState('-data_updated')
    let [dep, setDep] = useState('')
    let [search, setSearch] = useState('')
    let [departments, setDepartments] = useState([])
    let { authToken } = useContext(AuthContext)

    let onAddSort = (e) => {
        let path = `http://127.0.0.1:8000/api/vacancies/?search=${search}&exp_work=${exp_work}&salary=${salary}&department=${dep}&ordering=${sort}`
        e.preventDefault()
        axios
            .get(path,
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    }

                })
            .then(response => {
                props.setVacansies(response.data)
            })
            .catch(error => console.log(error.response))
    }

    useLayoutEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/departments",
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    }

                })
            .then(response => setDepartments(response.data))
            .catch(error => console.log(error.response))
    }, [])

    let onSortsChange = (e) => {
        console.log(e.target.name, e.target.value)
        if (e.target.name === 'salary') {
            setSalary(Number(e.target.value))
        } else if (e.target.name === 'exp_work') {
            setExp_Work(Number(e.target.value))
        } else if (e.target.name === 'dep') {
            setDep(e.target.value)
        }
        else if (e.target.name === 'sort') {
            setSort(e.target.value)
        }
        else if (e.target.name === 'search') {
            setSearch(e.target.value)
        }
    }

    let onDeleteSort = () => {
        setSalary('')
        setExp_Work('')
        setSearch('')
        setSort('-data_updated')
        setDep('')
        axios
            .get('http://127.0.0.1:8000/api/vacancies',
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    }

                })
            .then(response => props.setVacansies(response.data))
            .catch(error => console.log(error.response))
    }
    return (
        <div>
            <div>
                <input onChange={onSortsChange} name='search' value={search} type="text" placeholder="Поиск по вакансии"></input>
                <button onClick={onDeleteSort} className="vacansies-top__btn">Очистить</button>
                <button onClick={onAddSort} className="vacansies-top__btn">Применить</button>
            </div>
            <div className="sorts">
                <select placeholder="Сортировать" onChange={onSortsChange} type='text' name='sort' value={sort}>
                    <option value='-data_updated'>Сначала новые</option>
                    <option value='data_updated'>Сначала старые</option>
                </select>
                <input placeholder="Зарплата от" onChange={onSortsChange} type='number' name='salary' value={salary}></input>
                <input placeholder="Опыт работы от" onChange={onSortsChange} type='number' name='exp_work' value={exp_work}></input>
                <select placeholder="Департамент" onChange={onSortsChange} name='dep' value={dep}>
                    <option value=''></option>
                    {departments.map(department =>
                        <option value={department.id}>{department.name}</option>
                    )}
                </select>
            </div>
        </div>

    )
}

export default SortsVacansies;