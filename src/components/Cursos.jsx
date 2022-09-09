import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import ListarCurso from './ListarCurso';



const Cursos = () => {
    const [cursos, setCursos] = useState([]);
    const getCursos = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/cursos')
            setCursos(respuesta.data.cursos)
            return respuesta.data.cursos
        } catch (error) { console.log(error) }
    }
    useEffect(() => {
        getCursos()
    }, [])


    return (
        <div>
            {cursos.map((curso) => {
                return <ListarCurso key={curso._id} curso={curso} />
            })}
        </div>
    )
}

export default Cursos