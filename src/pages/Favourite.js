import axios from "axios";
import React, { useContext, useLayoutEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Vacansie from "../components/VacansiesList/PresentationComponents/Vacansie";

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

    if (favouriteElements.length > 0) {
        return (
            <div className="container">
                <h2 className='clicked'>Вакансии</h2>
                <ul className="vacansiesList">
                    {favouriteElements}
                </ul>
            </div>
        )
    } else {
        <p>Добавьте вакансии в избранное</p>
    }
}

export default Favourite;