import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
/* import 'react-toastify/dist/ReactToastify.css'; */
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import infocircle from '../../imgs/info-circle.png'

/* const ErrorAlert = () => {
  return (
    <div>
      <Alert icon={false} severity="error" className="error">
        <AlertTitle><strong>Действие не выполнено.</strong></AlertTitle>
        Повторите попытку через несколько секунд.
        
      </Alert>
    </div>);
} */

const ErrorAlert = () => {
  return (
    <div>
      <div icon={false} severity="error" className="alert error">
        <p><strong>Действие не выполнено.</strong></p>
        <p>Повторите попытку через несколько секунд.</p>
      </div>
    </div>);
}

export default ErrorAlert;

