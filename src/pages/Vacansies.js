import React, { useContext } from "react";
import VacansiesListAllContainer from "../components/VacansiesList/ContainerComponents/VacansiesListAllContainer";
import "../Styles/app.css"
import { NavLink } from "react-router-dom";
import VacansiesListMyContainer from "../components/VacansiesList/ContainerComponents/VacansiesListMyContainer";
import AuthContext from "../context/AuthContext";
import SortsVacansiesContainer from "../components/VacansiesList/ContainerComponents/SortsVacansiesContainer";

function Vacansies() {
    const [status, setStatus] = React.useState('all')
    let { user } = useContext(AuthContext)
    
        return (
            <div className="vacancies">
                <SortsVacansiesContainer />
                <div className="vacansies-top">
                    <div className="vacansies-top__all">
                        <h2 onClick={() => {setStatus('all')}} className={`${status === 'all' && 'active'}`  }>Вакансии</h2>
                    </div>
                    <div className="vacansies-top__my">
                        <h2 onClick={() => {setStatus('my')}} className={`${status === 'my' && 'active'}`  }>Мои вакансии</h2>
                    </div>
                    {user.is_header_dep && <div>
                        <NavLink to="/vacansies/new_vacansie/" className="vacansies-top__btn">Создать вакансию </NavLink>
                    </div>}
                </div>
                    <div className="vacansies-list">
                        {status === 'all' ? <VacansiesListAllContainer /> : <VacansiesListMyContainer />}
                        
                    </div>
            </div>
        )
} 

export default Vacansies;