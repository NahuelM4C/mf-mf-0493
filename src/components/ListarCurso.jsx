import React, { useState } from 'react';
import axios from 'axios'


const ListarCurso = ({ curso }) => {
    // URL = 'https://strong-planet-361708.nw.r.appspot.com/api/cursos'
    URL = 'http://localhost:3000/api/cursos/'
    console.log(curso);
    const extraerDatosUsuario = () => {
        const datosRecuperar = JSON.parse(localStorage.getItem('datosUsuario'));
        if (datosRecuperar && datosRecuperar.token) {
            console.log(datosRecuperar.token);
            return [datosRecuperar.token, datosRecuperar.userId];
        }
    };
    const [nombre, setNombre] = useState(curso.nombre)
    const [horas, setHoras] = useState(curso.horas)
    const [precio, setPrecio] = useState(curso.precio)

    const gestorNombre = (e) => {
        setNombre(e.target.value)
    }
    const gestorHoras = (e) => {
        setHoras(e.target.value)
    }
    const gestorPrecio = (e) => {
        setPrecio(e.target.value)
    }


    const modFunction = async () => {
        // const URL = 'http://localhost:3000/api/cursos/'
        await axios
            .patch(
                process.env.REACT_APP_BACKEND_URL + "/cursos/" + curso._id,
                {
                    nombre: nombre,
                    horas: horas,
                    precio: precio,
                    docente: extraerDatosUsuario()[1]
                },
                {
                    headers: {
                        Authorization: "Bearer " + extraerDatosUsuario()[0],
                    },
                },

            )
            .then((response) => {
                console.log("Todo correcto", response.data);
                window.location.reload(true)
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    return (
        <div className='Form-curso'>
            <div className='list-card'>
                <p>Curso: <strong>{curso.nombre}</strong></p>
                <input onChange={gestorNombre} type="text" value={nombre} placeholder={curso.nombre} />
                <p>Horas:</p>
                {/* <label>Horas </label> */}
                <input onChange={gestorHoras} type="number" value={horas} placeholder={curso.horas} />
                <p>Precio: </p>
                <input onChange={gestorPrecio} type="number" value={precio} placeholder={curso.precio} />
                <p>Docente: <strong>{curso.docente.nombre}</strong> </p>
                <div className='botones'>
                    <button
                        className='btn-delete'
                        onClick={async () => {
                            await axios.delete(process.env.REACT_APP_BACKEND_URL + "/cursos/" + curso._id, {
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
                    </button>
                    <button className='btn-mod' onClick={modFunction} >
                        Modificar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListarCurso