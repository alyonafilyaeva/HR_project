import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
/* import 'react-toastify/dist/ReactToastify.css'; */
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import infocircle from '../../imgs/info-circle.png'
import { NavLink } from 'react-router-dom';

/* const SuccessAlert = () => {
    return (
      <div>
        <Alert severity="success" className="success">
          <AlertTitle><strong>Заявка отправлена!</strong></AlertTitle>
          Для просмотра всех заявок перейдите на вкладку <NavLink to="/request">Мои заявки</NavLink>.
          
        </Alert>
      </div>);
  } */

  const SuccessAlert = () => {
    return (
      <div>
        <div severity="success" className="alert success">
          <p><strong>Заявка отправлена!</strong></p>
          <p>Для просмотра всех заявок перейдите на <br></br> вкладку <NavLink to="/request">Мои заявки</NavLink>.</p>
          
        </div>
      </div>);
  }
  
  export default SuccessAlert;