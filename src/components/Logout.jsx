import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Logout = (props) => {
    const { gestionLogout } = props
    const navegar = useNavigate();

    useEffect(() => {
        localStorage.removeItem('datosUsuario')
        gestionLogout();
        navegar('/docente/login')
    }, [])
    return (
        <div><h1>Loggin out</h1></div>
    )
}
export default Logout