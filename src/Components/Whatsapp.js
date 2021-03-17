import React from 'react';
import './Whatsapp.css';
import whatsappLogo from '../Images/whatsapp.png'

const Whatsapp = ()=>{
    return(
        <div
         className = "Whatsapp-btn"
         onClick = {()=>{
             window.open('https://wa.me/573204742600')
         }}
        >
            <img 
            src = {whatsappLogo}
            alt="btn-whatsapp"
            />
        </div>
    )
}

export default Whatsapp;