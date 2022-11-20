import React from 'react'
import ReactRout from './Sidebar'
import Registration from './Registration'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Vacansies from "./Vacansies";
import MyRequest from "./MyRequest"
import "./Styles/app.css"
import AddVacansieContainer from "./VacansiesList/AddVacansiesComponents/AddVacansieContainer";
import AddResumeContainer from "./ResumesList/AddResumeContainer";
import Resumes from "./Resumes";
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from '../Profile/Profile';
import EditProfile from '../Profile/EditProfile';
import NewVacansie from './VacansiesList/NewVacansie'
import SeeVacansieContainer from './VacansiesList/AddVacansiesComponents/SeeVacansieContainer';
import NewVacansieContainer from './VacansiesList/NewVacansieContainer';
import EditVacansie from './VacansiesList/AddVacansiesComponents/EditVacansie';
import ActiveVacansie from './VacansiesList/ActivVacansie';
import ActiveVacansieContainer from './VacansiesList/ActiveVacansieContainer';


const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='container'>
        <Sidebar />


        
        <Routes>
          <Route path="/vacansies"  exact element={ <Vacansies />}  />
          <Route path="/resumes"  element={<Resumes />} />
          <Route path="/request"  element={<MyRequest />} />
          <Route path="/vacansies/new_vacansie"  element={<NewVacansieContainer />} />
          <Route path="/vacansies/new_vacansie/create" element={<AddVacansieContainer />}/>
          <Route path="/vacansies/new_vacansie/see" element={<SeeVacansieContainer />}/>
          <Route path="/vacansies/new_vacansie/edit" element={ <EditVacansie />} />
          <Route path="/vacansie" element={<ActiveVacansie />}/>
          <Route path="/resumes/create_resume"  element={<AddResumeContainer />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/profile/edit" element={<EditProfile />}/>
          <Route path="*" element={<Vacansies />}/>  {/* тут должна быть ошибка 404 */}
        </Routes>
        </div>
        <Registration />
      </Router>
      
    </div>
  ) 
}

export default App;
