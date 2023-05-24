import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import infocircle from '../../imgs/info-circle.png'
import { NavLink } from 'react-router-dom';

const InfoAlert = () => {
    return (
      <div>
        <Alert severity="inform" className="info">
          <AlertTitle><strong>Отправляется.</strong></AlertTitle>
          Через несколько секунд заявка будет отправлена.
          {/* <img src={infocircle} className='info-circle'></img> */}
        </Alert>
      </div>);
  }
  
  export default InfoAlert;