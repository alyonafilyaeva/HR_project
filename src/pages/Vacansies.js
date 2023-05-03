import { useContext, useLayoutEffect, useState } from "react";
import VacansiesListAllContainer from '../components/VacansiesList/ContainerComponents/VacansiesListAllContainer'
import "../Styles/app.css"
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import SortsVacansiesContainer from '../components/VacansiesList/ContainerComponents/SortsVacansiesContainer'
import VacansiesListMyContainer from '../components/VacansiesList/ContainerComponents/VacansiesListMyContainer'
import axios from "axios"


function Vacansies(props) {
    const [status, setStatus] = useState('all')
    let { authToken } = useContext(AuthContext)
    let { user } = useContext(AuthContext)
    let [vacancies, setVac] = useState(<VacansiesListAllContainer />)
    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/skills/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
            .then(response => {
                props.setSkills(response.data.skills)
                
                console.log(response)
            })

    }, [])

    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/vacancies/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
            .then(response => {
                props.setVacansies(response.data)
                console.log(response)
            })

    }, [])

    return (
        <div className="container">
            <SortsVacansiesContainer />
            <div className="vacansies-top">
                <div className="vacansies_name_list">
                    <div className="list all">
                        <h2 onClick={() => { setVac(<VacansiesListAllContainer />); setStatus('all') }} className={`${status === 'all' && 'clicked'}`}>Вакансии</h2>
                    </div>
                    {user.is_header_dep &&
                        <div className="list my">
                            <h2 onClick={() => { setVac(<VacansiesListMyContainer />); setStatus('my') }} className={`${status === 'my' && 'clicked'}`}>Мои вакансии</h2>
                        </div>}
                </div>
                {user.is_header_dep && <div>
                    <NavLink to="/vacansies/create_vacansie/" className="create orange">Создать вакансию </NavLink>
                </div>}
            </div>
            <div className="vacansies-list" value={vacancies}>
                {vacancies}
            </div>
        </div>
    )
}

export default Vacansies;