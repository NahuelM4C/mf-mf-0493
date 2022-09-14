import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import ListarCurso from './ListarCurso';

const Cursos = ({ gestionLogin }) => {
    const [cursos, setCursos] = useState([]);
    const getCursos = async () => {
        try {
            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cursos`)
            setCursos(respuesta.data.cursos)
            gestionLogin(true)
            return respuesta.data.cursos
        } catch (error) { console.log(error) }
    }
    useEffect(() => {
        getCursos()
    }, [])


    return (
        <div className='div-pintacurso'>
            {cursos.map((curso) => {
                return <ListarCurso key={curso._id} curso={curso} gestionLogin={gestionLogin} />
            })}
        </div>
    )
}

export default Cursos