import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import infocircle from '../../imgs/info-circle.png'

const ErrorAlert = () => {
  return (
    <div>
      <Alert icon={false} severity="error" className="error">
        <AlertTitle><strong>Действие не выполнено.</strong></AlertTitle>
        Повторите попытку через несколько секунд.
        {/* <img src={infocircle} className='info-circle'></img> */}
      </Alert>
    </div>);
}

export default ErrorAlert;

