import React from 'react';

const ListarDocente = ({ docente }) => {
    // console.log(docente);
    const resultado = docente.cursos.map((dato) => {
        // console.log(dato)
        return dato.nombre  //! PELIGRO NO TOCAR
    })
    console.log(resultado)
    return (
        <div className='Form'>
            <div className='title'>
                <h6>Docente:{docente.nombre}</h6>
                <h6>Email:{docente.email}</h6>
                <h6>Curso: <p> {resultado} </p> </h6>
            </div>
        </div>
    )
}

export default ListarDocente