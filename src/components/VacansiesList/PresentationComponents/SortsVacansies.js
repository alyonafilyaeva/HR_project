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
    let scheduleFilter = ''
    let employmentFilter = ''
    let [schedule0, setSchedule0] = React.useState(false)
    let [schedule1, setSchedule1] = React.useState(false)
    let [schedule2, setSchedule2] = React.useState(false)
    let [schedule3, setSchedule3] = React.useState(false)
    let [employment0, setEmployment0] = React.useState(false)
    let [employment1, setEmployment1] = React.useState(false)
    let [employment2, setEmployment2] = React.useState(false)
    let [employment3, setEmployment3] = React.useState(false)
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
    let [skill, setSkill] = useState('')

    let onAddSort = (e) => {
        if (schedule0) {
            scheduleFilter += '&schedule=0'
        }
        if (schedule1) {
            scheduleFilter += '&schedule=1'
        }
        if (schedule2) {
            scheduleFilter += '&schedule=2'
        }
        if (schedule3) {
            scheduleFilter += '&schedule=3'
        }
        if (employment0) {
            employmentFilter += '&employment=0'
        }
        if (employment1) {
            employmentFilter += '&employment=1'
        }
        if (employment2) {
            employmentFilter += '&employment=2'
        }
        if (employment3) {
            employmentFilter += '&employment=3'
        }
        let path = `http://127.0.0.1:8000/api/vacancies/?search=${search}&exp_work=${exp_work}&salary=${salary}&department=${dep}&ordering=${sort}${skillsFilter}${scheduleFilter}${employmentFilter}`
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
            console.log(e.target.value.value)
        }

        
        console.log(scheduleFilter)
    }
    let [skillsFilter, setSkillsFilter] = React.useState('')
    function skillsChange(data) {
        setSkill(data)
        console.log(data)
        for (let i = 0; i < optionList.length; i++) {
            console.log(data[i].value)
            data[i].value =! undefined && setSkillsFilter(skillsFilter => skillsFilter + `&skills=${data[i].value}`)
            console.log(skillsFilter)
        }
        console.log(skillsFilter)
    }

    let onDeleteSort = () => {
        setSalary('')
        setExp_Work('')
        setSearch('')
        setSort('-data_updated')
        setDep('')
        setSkillsFilter('')
        setSkill('')
        scheduleFilter = ''
        employmentFilter = ''
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
                        <Select
                            closeMenuOnSelect={false}
                            isMulti
                            name='skills'
                            options={optionList1}
                            placeholder="Найти компетенцию"
                            value={skill}
                            onChange={skillsChange}
                            isSearchable={true} />

                    </div>
                    <div className='filter-item'>
                        <p>Занятость</p>
                        <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment0(!employment0)}></input>
                                <label>Проектная работа</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment1(!employment1)}></input>
                                <label>Стажировка</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment2(!employment2)}></input>
                                <label>Частичная занятость</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment3(!employment3)}></input>
                                <label>Полная занятость</label>
                            </div>
                    </div>
                    <div className='filter-item'>
                        <p>График работы</p>
                        <div className='checkbox-item'>
                            <input type='checkbox' value={0} onClick={() => setSchedule0(!schedule0)} onChange={onSortsChange} name="schedule-0"></input>
                            <label>Гибкий график</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type='checkbox' value={1} onClick={() => setSchedule1(!schedule1)} onChange={onSortsChange} name="schedule-1"></input>
                            <label>Удаленная работа</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type='checkbox' value={2} onClick={() => setSchedule2(!schedule2)} onChange={onSortsChange} name="schedule-2"></input>
                            <label>Сменный график</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type='checkbox' value={3} onClick={() => setSchedule3(!schedule3)} onChange={onSortsChange} name="schedule-3"></input>
                            <label>Полный день</label>
                        </div>
                    </div>

                </div>



            </div>
        </div>

    )
}

export default SortsVacansies;