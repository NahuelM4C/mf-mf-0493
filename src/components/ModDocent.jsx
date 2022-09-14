import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

const ModDocent = () => {
    // URL= 'https://strong-planet-361708.nw.r.appspot.com/api'
    const [docentes, setDocentes] = useState([]);
    const getDocente = async () => {
        try {
            // const respuesta = await axios.get(URL+"/docente")
            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/docente/`)
            setDocentes(respuesta.data.docentes)
            return respuesta.data.docentes;
        } catch (err) { console.log(err) }
    }
    useEffect(() => {
        getDocente()
    }, [])


    return (
        <div>

        </div>
    )
}

export default ModDocent