import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const ModDocent = () => {
    const [docentes, setDocentes] = useState({});
    const [nombre, setNombre] = useState(docentes.nombre);
    const [email, setEmail] = useState(docentes.email);

    const extraerDatosUsuario = () => {
        const datosRecuperar = JSON.parse(localStorage.getItem('datosUsuario'));
        if (datosRecuperar && datosRecuperar.token) {
            console.log(datosRecuperar.token);
            return [datosRecuperar.token, datosRecuperar.userId];
        }
    }

    const getDocente = async () => {
        try {
            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/docente/${extraerDatosUsuario()[1]}`)
            setDocentes(respuesta.data.docente)
            return respuesta.data.docente;
        } catch (err) { console.log(err) }
    }
    useEffect(() => {
        getDocente()
    }, [])
    console.log(docentes);

    const gestorNombre = (e) => {
        setNombre(e.target.value)
    }
    const gestorEmail = (e) => {
        setEmail(e.target.value)
    }

    const gestorMod = async () => {
        await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/docente/${extraerDatosUsuario()[1]}`, {
            nombre: nombre,
            email: email
        }).then((response) => {
            console.log("Todo correcto", response.data);
            window.location.reload(true)

        })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    return (
        <div className='Form-modDocent'>
            <input onChange={gestorNombre} type="text" value={nombre} placeholder={docentes.nombre} />
            <input onChange={gestorEmail} type="email" value={email} placeholder={docentes.email} />
            <input value='Modificar' type="submit" onClick={gestorMod} />
        </div>
    )
}

export default ModDocent