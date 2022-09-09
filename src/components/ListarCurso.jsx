import React from 'react'

const ListarCurso = ({ curso }) => {
    console.log(curso);
    return (
        <div className='Form'>
            <div className='title'>
                <h6>Curso: {curso.nombre}</h6>
                <h6>Horas: {curso.horas}</h6>
                <h6>Precio: {curso.precio} </h6>
                <h6>Docente: {curso.docente.nombre} </h6>
            </div>
        </div>
    )
}

export default ListarCurso