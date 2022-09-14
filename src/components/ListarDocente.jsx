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
        // console.log(dato)
        return dato.nombre  //! PELIGRO NO TOCAR
    })
    console.log(resultado)
    return (
        <div className='Form-curso'>
            <div className='list-card'>
                <p>Docente: <strong>{docente.nombre}</strong></p>
                <p>Email: <strong>{docente.email}</strong></p>
                <p>Curso: <p> {resultado} </p></p>
                {/* <button
                    className='btn-delete'
                    onClick={async () => {
                        await axios.delete(URL + docente._id, {
                            headers: {
                                Authorization: "Bearer " + extraerDatosUsuario()[0],
                            }
                        })
                            .then((response) => { window.location.reload(true) })
                            .catch((error) => {
                                console.log(error.response.data);
                            })
                    }}
                >
                    Eliminar
                </button> */}
            </div>
        </div>
    )
}

export default ListarDocente