import { useContext, useState } from "react";
import ResumesListAllContainer from "../components/ResumesList/ResumesListAllContainer";
import "../Styles/app.css"
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import SortsResumesContainer from "../components/ResumesList/SortsResumesContainer";
import ResumesListMyContainer from '../components/ResumesList/ResumesListMyContainer'

function Resumes(props) {
    const [status, setStatus] = useState('all')
    let { user } = useContext(AuthContext)
    let [resumes, setRes] = useState(<ResumesListAllContainer />)
    return (
        <div className="container">
            {user.is_header_dep && <SortsResumesContainer />}
            <div className="vacansies-top">
                <div className="vacansies_name_list">
                    <div className="list all">
                        <h2 onClick={() => { setStatus('all') }} className={`${status === 'all' && 'clicked'}`}>Резюме</h2>
                    </div>
                    <div className="list my">
                        <h2 onClick={() => { setStatus('my') }} className={`${status === 'my' && 'clicked'}`}>
                            {user.is_header_dep ? 'Мое резюме' : ''}
                        </h2>
                    </div>
                </div>

                <div>
                    <NavLink to="/resumes/create_resume" className="orange ">Создать резюме </NavLink>
                </div>
            </div>
            <div className="vacansies-list">
                {status === 'all' ? <ResumesListAllContainer /> : <ResumesListMyContainer />}
            </div>
        </div>
    )
}

export default Resumes;