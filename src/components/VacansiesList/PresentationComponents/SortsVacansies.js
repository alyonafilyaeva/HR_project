import React, { useLayoutEffect, useState } from 'react'
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import Select from "react-select";

const SortsVacansies = (props) => {
    let [salary, setSalary] = useState('')
    let [exp_work, setExp_Work] = useState('')
    let [sort, setSort] = useState('-data_updated')
    let [dep, setDep] = useState('')
    let [search, setSearch] = useState('')
    let [departments, setDepartments] = useState([])
    let { authToken } = useContext(AuthContext)
    let [hide, setHide] = useState(true)
    /* const optionList = [
        {value: 1, label: 'JS'},
        {value: 2, label: 'React'},
        {value: 3, label: 'Работа в команде'},
    ] */
    console.log(props.skills.skills)
    let optionList = props.skills.skills
    let optionList1 = props.skills.skills
    for (var i = 0; i < optionList.length; i++) {
        optionList[i].value = optionList[i]['id'];
        optionList[i].label = optionList[i]['name'];
        /* delete optionList[i].name;  */
      }
    console.log(optionList1)
    let [skill, setSkill] = useState()

    let onAddSort = (e) => {
        let path = `http://127.0.0.1:8000/api/vacancies/?search=${search}&exp_work=${exp_work}&salary=${salary}&department=${dep}&ordering=${sort}&skills=${skill.value}`
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
        else if (e.target.name === 'skills') {
            setSkill(e.target.value)
            console.log(e.target.value)
        }
    }

    function skillsChange(data) {
        setSkill(data)
        console.log(data)
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

    let onHideFilers = () => {
        setHide(!hide)
        /* {hide} ? {document.getElementsByClassName('filters').classList.add('hide')} : {document.getElementsByClassName('filters').classList.remove('hide')} */
        if (hide) {
            document.getElementById('hide').classList.remove('hide')
        }
        else {
            document.getElementById('hide').classList.add('hide')
        }
    }

    return (
        <div className='sort_block'>
            <div className='search'>
                <input onChange={onSortsChange} name='search' value={search} type="text" placeholder="Поиск по вакансии" className='search_input'></input>
                <div className='sorts_btns'>
                    <button onClick={onDeleteSort} className="sorts-top_btn grey">Очистить</button>
                    <button onClick={onAddSort} className="sorts-top_btn orange">Применить</button>
                </div>
            </div>
            <div className="sorts">
                <div className='filters-see'>
                    <div className='filter-item'>
                        <p>Сортировать</p>
                        <select className='parametr sort' placeholder="Сортировать" onChange={onSortsChange} type='text' name='sort' value={sort}>
                            <option value='-data_updated'>Сначала новые</option>
                            <option value='data_updated'>Сначала старые</option>
                        </select>
                    </div>
                    <div className='filter-item'>
                        <p>Зарплата</p>
                        <div className='salary-block'>
                        <input className='parametr salary' placeholder="От" onChange={onSortsChange} type='number' name='salary' value={salary}></input>
                        <input className='parametr salary' placeholder="До" onChange={onSortsChange} type='number' name='salary' value={salary}></input>
                        </div>
                        
                    </div>
                    <div className='filter-item'>
                        <p>Опыт работы</p>
                        <select className='parametr exp' placeholder="Опыт работы" onChange={onSortsChange} name='exp_work' value={exp_work}>
                            <option value=''>Не имеет значения</option>
                            <option value=''>Нет опыта</option>
                            <option value=''>От 1 года до 3 лет</option>
                            <option value=''>От 3 лет до 6 лет</option>
                            <option value=''>От 6 лет</option>
                        </select>
                    </div>

                    {/* <input className='parametr exp' placeholder="Опыт работы" onChange={onSortsChange} type='number' name='exp_work' value={exp_work}></input> */}
                    <button onClick={onHideFilers} className='btn-filters'>Все фильтры</button>
                </div>

                <div className='filters hide' id='hide'>
                    <div className='filter-item'>
                        <p>Департамент</p>
                        <select className='parametr last dep' placeholder="Департамент" onChange={onSortsChange} name='dep' value={dep}>
                            <option value=''>Не имеет значения</option>
                            {departments.map(department =>
                                <option value={department.id}>{department.name}</option>
                            )}
                        </select>
                    </div>
                    <div className='filter-item'>
                        <p>Компетенции</p>
                        {/* <input onChange={onSortsChange} name='skills' value={search} type="text" placeholder="Найти компетенцию" className='paramentr skill'></input> */}
                        
                            {/* <option value=''>Не имеет значения</option> */}
                            {/* {props.skills.skills.map(skill =>
                                <option value={skill.id}>{skill.name}</option>
                            )} */}
                            <Select 
                            name='skills'
                            options={optionList1}
                            placeholder="Найти компетенцию"
                            value={skill}
                            onChange={skillsChange}
                            isSearchable={true}/>
                        
                    </div>
                    <div className='filter-item'>
                        <p>Занятость</p>
                        <div className='checkbox-item'>
                            <input type='checkbox'></input>
                            <label>Полная занятость</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type='checkbox'></input>
                            <label>Частичная занятость</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type='checkbox'></input>
                            <label>Стажировка</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type='checkbox'></input>
                            <label>Проектная работа</label>
                        </div>
                    </div>
                    <div className='filter-item'>
                        <p>График работы</p>
                        <div className='checkbox-item'>
                            <input type='checkbox'></input>
                            <label>Полный день</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type='checkbox'></input>
                            <label>Сменный график</label>
                        </div>
                        <div className='checkbox-item'> 
                            <input type='checkbox'></input>
                            <label>Удаленная работа</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type='checkbox'></input>
                            <label>Проектная работа</label>
                        </div>
                    </div>

                </div>



            </div>
        </div>

    )
}

export default SortsVacansies;