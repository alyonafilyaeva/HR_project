import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useLayoutEffect } from "react";
import AuthContext from "../context/AuthContext";
import Department from "../components/DepartmentsList/Department";

function Company() {
    let [city, setCity] = useState('Екатеринбург')
    let { authToken } = useContext(AuthContext)
    let [departments, setDepartments] = useState([])
    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/departments", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
            .then(response => {
                setDepartments(response.data)
                console.log(response.data)
            })

    }, [])

    let departmentElements = departments.map(department =>
        <Department department={department} />
    )
    console.log(departments)

    return (
        <div className="container">
            <h3>Компания</h3>
            <div className="cities list">
                <h2 onClick={() => setCity('Екатеринбург')} className={`${city === 'Екатеринбург' && 'clicked'}`}>Екатеринбург</h2>
                <h2 onClick={() => setCity('Красноярск')} className={`${city === 'Красноярск' && 'clicked'}`}>Красноярск</h2>
                <h2 onClick={() => setCity('Сочи')} className={`${city === 'Сочи' && 'clicked'}`}>Сочи</h2>
            </div>
            <div className="dep-container">
                <h2>{city}</h2>
                <div className="departments">
                    <div className="dep-item">
                        <h3>Отдел разработки</h3>
                        <div className="dep-list">
                            {departmentElements}
                        </div>
                    </div>
                    <div className="dep-item">
                        <h3>Торговый отдел</h3>
                        <div className="dep-list">
                            <p>Sales</p>
                            <p>Marketing</p>
                        </div>
                    </div>
                    <div className="dep-item">
                        <h3>Отдел кадров</h3>
                        <div className="dep-list">
                            <p>HR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;