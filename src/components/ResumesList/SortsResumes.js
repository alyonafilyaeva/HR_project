import React, { useLayoutEffect, useState } from 'react'
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import Select from "react-select";

const SortsResumes = (props) => {
    let [salary, setSalary] = useState('')
    let [exp_work, setExp_Work] = useState('')
    let [sort, setSort] = useState('-data_updated')
    let [search, setSearch] = useState('')
    let [departments, setDepartments] = useState([])
    let [skills, setSkills] = useState([])
    let [expFrom, setExpFrom] = useState('')
    let [expTo, setExpTo] = useState('')
    let { authToken } = useContext(AuthContext)
    let [skillsFilter, setSkillsFilter] = React.useState('')
    let optionList = props.skills.skills
    let optionList1 = props.skills.skills
    let [skill, setSkill] = useState('')
    for (var i = 0; i < optionList.length; i++) {
        optionList[i].value = optionList[i]['id'];
        optionList[i].label = optionList[i]['name'];
    }
    function skillsChange(data) {
        debugger
        setSkill(data)
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            /* data[i] = !undefined && */ setSkillsFilter(skillsFilter => skillsFilter + `&skills=${data[i].value}`)
            console.log(skillsFilter)
        }
        console.log(skillsFilter)
    }

    let onAddSort = (e) => {
        let path = `http://127.0.0.1:8000/api/resumes/?search=${search}&exp_work__gt=${expFrom}&exp_work__lt=${expTo}&salary=${salary}&ordering=${sort}${skillsFilter}`
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
                props.setResumes(response.data)
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
            switch (e.target.value) {
                case "0":
                    setExpFrom('')
                    setExpTo('')
                    break;
                case "1":
                    setExpFrom(0)
                    break;
                case "2":
                    setExpFrom(1)
                    setExpTo(3)
                    break;
                case "3":
                    setExpFrom(3)
                    setExpTo(6)
                    break;
                case "4":
                    setExpFrom(6)
                    break;
                default:
                    break;
            }
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
        setSkillsFilter('')
        setSkill('')
        // setDep('')
        axios
            .get('http://127.0.0.1:8000/api/resumes',
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    }

                })
            .then(response => props.setResumes(response.data))
            .catch(error => console.log(error.response))
    }
    return (
        <div className='sort_block'>
            <div className='search'>
                <input type="text" placeholder="Поиск по резюме" className='search_input'></input>
                <div className='sorts_btns_resume'>
                    <button onClick={onDeleteSort} className="sorts-top_btn grey">Очистить</button>
                    <button onClick={onAddSort} className="sorts-top_btn orange">Применить</button>
                </div>
            </div>
            <div className="sorts">
                <div className='filters-see'>
                    <div className='filter-item'>
                        <p>Сортировать</p>
                        <select placeholder="Сортировать" className='parametr sort' onChange={onSortsChange} type='text' name='sort' value={sort}>
                            <option value='-data_updated'>Сначала новые</option>
                            <option value='data_updated'>Сначала старые</option>
                        </select>
                    </div>
                    <div className='filter-item'>
                        <p>Зарплата</p>
                        <div className='salary-block'>
                            <input className='parametr salary' placeholder="От" onChange={onSortsChange} type='number' name='salary' value={salary}></input>
                        </div>

                    </div>
                    <div className='filter-item'>
                        <p>Опыт работы</p>
                        <select className='parametr exp' placeholder="Опыт работы" onChange={onSortsChange} name='exp_work' value={exp_work}>
                            <option value='0'>Не имеет значения</option>
                            <option value='1'>Нет опыта</option>
                            <option value='2'>От 1 года до 3 лет</option>
                            <option value='3'>От 3 лет до 6 лет</option>
                            <option value='4'>От 6 лет</option>
                        </select>
                    </div>
                    <div className='filter-item'>
                        <p>Компетенции</p>
                        <Select
                            closeMenuOnSelect={false}
                            isMulti
                            maxMenuHeight={120}
                            name='skills'
                            options={optionList1}
                            placeholder="Найти компетенцию"
                            value={skill}
                            onChange={skillsChange}
                            className='skill-filter-resume'
                            isSearchable={true} />

                    </div>

                    {/* <input className='parametr exp' placeholder="Опыт работы" onChange={onSortsChange} type='number' name='exp_work' value={exp_work}></input> */}
                </div>


            </div>
        </div>

    )
}

export default SortsResumes;