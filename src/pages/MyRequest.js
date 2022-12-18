import { useContext, useLayoutEffect, useState } from "react";
import VacansiesListAllContainer from '../components/VacansiesList/ContainerComponents/VacansiesListAllContainer'
import "../Styles/app.css"
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios"
import VacansiesListContainer from "../components/RequestsList/VacansiesListContainer";
import ResumesListContainer from "../components/RequestsList/ResumesListContainer";

function MyRequest() {
    const [status, setStatus] = useState('vacansies')
    let { user, authToken } = useContext(AuthContext)

    useLayoutEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/requests/`,
            headers: {
            Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: { status: '1' }
            }).then(response => {
                console.log(response.data)
                /* props.setVacansiesRequests(response.data) */
            })
    }, [])

    return (
        <div className="container">
            <div className="vacansies-top">
                <div className="vacansies_name_list">
                    <div className="list all">
                        <h2 onClick={() => { setStatus('vacansies') }} className={`${status === 'vacansies' && 'clicked'}`}>Вакансии</h2>
                    </div>
                    {user.is_header_dep &&
                        <div className="list my">
                            <h2 onClick={() => {setStatus('resumes') }} className={`${status === 'resumes' && 'clicked'}`}>Резюме</h2>
                        </div>}
                </div>
            </div>
            <div className="vacansies-list">
            {status == 'vacansies' ? <VacansiesListContainer /> : <ResumesListContainer />}
            </div>
        </div>
    )
}

export default MyRequest;