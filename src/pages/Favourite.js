import axios from "axios";
import React, { useContext, useLayoutEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Vacansie from "../components/VacansiesList/PresentationComponents/Vacansie";
import { NavLink } from "react-router-dom";
import iconFavourite from "../imgs/iconFavourite.png"

function Favourite() {
    let { user } = useContext(AuthContext)
    let { authToken } = useContext(AuthContext)
    let [favouriteVacancies, setFavouriteVacancies] = useState([])

    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/vacancies/to_favorite/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
            .then(response => {
                setFavouriteVacancies(response.data.vacancies)

                console.log(response)
            })

    }, [])

    const favouriteElements = favouriteVacancies.map(vacansie =>
        <Vacansie vacansie={vacansie} />
    )

    return (
        <div className="container">
            <h3>Избранное</h3>
            <h2 className='clicked'>Вакансии</h2>
            {favouriteElements.length ?
                <ul className="vacansiesList">
                    {favouriteElements}
                </ul> :
                <div className="no-requests">
                    <img src={iconFavourite} />
                    <h3>Еще нет избранных вакансий?</h3>
                    <NavLink to="/vacansies" className="orange">Открыть вакансии</NavLink>
                </div>}
        </div>
    
    )
}

export default Favourite;

