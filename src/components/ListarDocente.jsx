import React from 'react';


const ListarDocente = ({ docente }) => {
    // console.log(docente);
    // const extraerDatosUsuario = () => {
    //     const datosRecuperar = JSON.parse(localStorage.getItem('datosUsuario'));
    //     if (datosRecuperar && datosRecuperar.token) {
    //         console.log(datosRecuperar.token);
    //         return [datosRecuperar.token, datosRecuperar.userId];
    //     }
    // };
    const resultado = docente.cursos.map((dato) => {
        return dato.nombre  //! PELIGRO NO TOCAR
    })
    console.log(resultado)
    return (
        <div className='Form-curso'>
            <div className='list-card'>
                <p>Docente: <strong>{docente.nombre}</strong></p>
                <p>Email: <strong>{docente.email}</strong></p>
                <p>Curso: <p> {resultado} </p></p>
            </div>
        </div>
    )
}

export default ListarDocente