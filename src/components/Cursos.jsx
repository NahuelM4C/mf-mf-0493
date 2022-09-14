import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import ListarCurso from './ListarCurso';

const Cursos = () => {
    // URL= 'https://strong-planet-361708.nw.r.appspot.com/api'
    const [cursos, setCursos] = useState([]);
    const getCursos = async () => {
        try {
            // const respuesta = await axios.get (URL + "/cursos")
            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cursos`)
            setCursos(respuesta.data.cursos)
            return respuesta.data.cursos
        } catch (error) { console.log(error) }
    }
    useEffect(() => {
        getCursos()
    }, [])


    return (
        <div className='div-pintacurso'>
            {cursos.map((curso) => {
                return <ListarCurso key={curso._id} curso={curso} />
            })}
        </div>
    )
}

export default Cursos