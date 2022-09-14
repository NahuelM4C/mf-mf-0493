import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Logout = ({ gestionLogin }) => {
    const navegar = useNavigate();

    const antino = () => {
        localStorage.removeItem('datosUsuario')
        gestionLogin(false);
    }
    useEffect(() => {
        antino();
        navegar('/docente/login')
    }, [])
    return (
        <div><h1>Loggin out</h1></div>
    )
}
export default Logout