import '../App.css';
import React, { useState } from 'react'
import axios from 'axios';
import ListarDocente from './ListarDocente';
import { useEffect } from 'react';

const Docente = () => {
    // URL = 'http://localhost:3000/api/docente'
    const [docentes, setDocentes] = useState([]);
    const getDocente = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/docente')
            setDocentes(respuesta.data.docentes)
            return respuesta.data.docentes;
        } catch (err) { console.log(err) }
    }
    useEffect(() => {
        getDocente()
    }, [])

    return (
        <div>
            {docentes.map((docente) => {
                console.log(docente)
                return <ListarDocente key={docente.id} docente={docente} />
            })}
        </div>
    )
}

export default Docente