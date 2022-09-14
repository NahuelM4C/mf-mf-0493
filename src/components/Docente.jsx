import '../App.css';
import React, { useState } from 'react'
import axios from 'axios';
import ListarDocente from './ListarDocente';
import { useEffect } from 'react';
import ModDocent from './ModDocent'

const Docente = ({ gestionLogin }) => {
    const [docentes, setDocentes] = useState([]);

    const extraerDatosUsuario = () => {
        const datosRecuperar = JSON.parse(localStorage.getItem('datosUsuario'));
        if (datosRecuperar && datosRecuperar.token) {
            console.log(datosRecuperar.token);
            return [datosRecuperar.token, datosRecuperar.userId];
        }
    }

    const getDocente = async () => {
        try {
            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/docente`)
            setDocentes(respuesta.data.docentes)
            gestionLogin(true)
            return respuesta.data.docentes;
        } catch (err) { console.log(err) }
    }
    useEffect(() => {
        getDocente()
    }, [])

    return (
        <div>
            <h2>Datos de Usuario</h2>
            <ModDocent />
            <h3>Docentes</h3>
            {docentes.map((docente) => {
                return <ListarDocente key={docente.id} docente={docente} />
            })}
        </div>
    )
}

export default Docente