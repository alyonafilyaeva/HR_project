import React, { useContext, useState } from "react";
import VacansiesListAllContainer from '../components/VacansiesList/ContainerComponents/VacansiesListAllContainer'
import "../Styles/app.css" 
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import SortsVacansiesContainer from '../components/VacansiesList/ContainerComponents/SortsVacansiesContainer'
import VacansiesListMyContainer from '../components/VacansiesList/ContainerComponents/VacansiesListMyContainer'

function Vacansies() {
    const [status, setStatus] = React.useState('all')
    let { user } = useContext(AuthContext)
    let [vacancies, setVac] = useState(<VacansiesListAllContainer />)

    return (
        <div className="vacancies">
            <SortsVacansiesContainer />
            <div className="vacansies-top">
                <div className="vacansies-top__all">
                    <h2 onClick={() => { setVac(<VacansiesListAllContainer />); setStatus('all') }} className={`${status === 'all' && 'active'}`}>Вакансии</h2>
                </div>
                {user.is_header_dep &&
                    <div className="vacansies-top__my">
                        <h2 onClick={() => { setVac(<VacansiesListMyContainer />); setStatus('my') }} className={`${status === 'my' && 'active'}`}>Мои вакансии</h2>
                    </div>}
                {user.is_header_dep && <div>
                    <NavLink to="/vacansies/new_vacansie/" className="vacansies-top__btn">Создать вакансию </NavLink>
                </div>}
            </div>
            <div className="vacansies-list" value={vacancies}>
                {vacancies}

            </div>
        </div>
    )
}

export default Vacansies;