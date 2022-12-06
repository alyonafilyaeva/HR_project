import React from 'react'
import ReactRout from './Sidebar'
import Registration from './Registration'
import { BrowserRouter as Router, Routes, Route, NavLink, redirect } from "react-router-dom";
import Vacansies from "./Vacansies";
import MyRequest from "./MyRequest"
import "./Styles/app.css"
import AddVacansieContainer from "./VacansiesList/AddVacansiesComponents/AddVacansieContainer";
import AddResumeContainer from "./ResumesList/AddResumeContainer";
import Resumes from "./Resumes";
import Sidebar from './Sidebar';
import Header from './Header';
import EditProfile from './Profile/EditProfile';
import NewVacansie from './VacansiesList/NewVacansie'
import SeeVacansieContainer from './VacansiesList/AddVacansiesComponents/SeeVacansieContainer';
import NewVacansieContainer from './VacansiesList/NewVacansieContainer';
import EditVacansie from './VacansiesList/AddVacansiesComponents/EditVacansie';
import ActiveVacansie from './VacansiesList/ActivVacansie';
import {AuthProvider} from '../context/AuthContext';
import LoginPage from '../pages/LoginPage';
import ProfileContainer from './Profile/ProfileContainer';
import ResumesContainer from './ResumesContainer';
import VacansiesContainer from './VacasiesContainer';
import ActiveResume from './ResumesList/ActiveResume';
import ActiveVacansieContainer from './VacansiesList/ActiveVacansieContainer';
import VacansiesListAllContainer from './VacansiesList/VacansiesListAllContainer';
import VacansiesListMyContainer from './VacansiesList/VacansiesListMyContainer';
import EditVacansieContainer from './VacansiesList/AddVacansiesComponents/EditVacansieContainer';
import RegisterPage from '../pages/RegisterPage';
import ActiveResumeContainer from './ResumesList/ActiveResumeContainer';
import EditResumeContainer from './ResumesList/EditResumeContainer';
import EditProfileContainer from './Profile/EditProfileContainer';


const App = () => {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
        <Header />
        <NavLink to="/auth/login" className="">Войти </NavLink>
        <NavLink to="/register" className="">Зарегистрироваться </NavLink>
        <div className='container'>
        <Sidebar />


        <redirect exact from="/" to="/auth/login" />
        <Routes>
          {/* <Route exact path='/'>
            <redirect to="/auth/login"/>
          </Route> */}
          <Route path='/auth/login' exact element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="/vacansies"   element={ <VacansiesContainer />}  />
          <Route path="/vacansies/all"   element={ <VacansiesListAllContainer />}  />
          <Route path="/vacansies/my"   element={ <VacansiesListMyContainer />}  />
          <Route path="/resumes"  element={<ResumesContainer />} />
          <Route path="/request"  element={<MyRequest />} />
          <Route path="/vacansies/new_vacansie"  element={<NewVacansieContainer />} />
          <Route path="/vacansies/new_vacansie/create" element={<AddVacansieContainer />}/>
          <Route path="/vacansies/new_vacansie/see" element={<SeeVacansieContainer />}/>
          <Route path="/vacansie/edit/:id" element={ <EditVacansieContainer />} />
          <Route path="/vacansie/:id" element={<ActiveVacansieContainer />}/>
          <Route path="/resume/:id" element={<ActiveResumeContainer />}/>
          <Route path="/resume/edit/:id" element={<EditResumeContainer />}/>
          <Route path="/resumes/create_resume"  element={<AddResumeContainer />} />
          <Route path="/profile" element={<ProfileContainer />}/>
          <Route path="/profile/edit" element={<EditProfileContainer />}/>
          <Route path="*" element={<Vacansies />}/>  {/* тут должна быть ошибка 404 */}
        </Routes>
        </div>
        {/* <Registration /> */}
        </AuthProvider>
      </Router>
      
    </div>
  ) 
}

export default App;
