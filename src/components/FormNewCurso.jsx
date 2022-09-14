import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Cursos from './Cursos';
import Buscar from './Buscar'
import '../App.css'




const FormNewCurso = ({ gestionLogin }) => {
    // const URL= 'https://strong-planet-361708.nw.r.appspot.com/api/cursos'

    let navegar = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const extraerDatosUsuario = () => {
        const datosRecuperar = JSON.parse(localStorage.getItem('datosUsuario'));
        if (datosRecuperar && datosRecuperar.token) {
            console.log(datosRecuperar.token);
            return [datosRecuperar.token, datosRecuperar.userId];
        }
    };

    const crearCurso = async (data) => {
        await axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/cursos`,
                {
                    nombre: data.nombre,
                    horas: data.horas,
                    precio: data.precio,
                    docente: extraerDatosUsuario()[1]
                },
                {
                    headers: {
                        Authorization: "Bearer " + extraerDatosUsuario()[0],
                    },
                },
                setValue("nombre", null),
                setValue("horas", null),
                setValue("precio", null),
                setValue("docente", null)
            )
            .then((response) => {
                gestionLogin(true);
                console.log("Todo correcto", response.data);
                window.location.reload();
                // navegar("/cursos")
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    return (
        <div className='div-cursos'>
            <div className='form-newcurso'>
                <div className='title' >Nuevo Curso</div>
                <div className='inputs'>
                    <form onSubmit={handleSubmit(crearCurso)}>
                        <input type="text"
                            name='nombre'
                            placeholder="nombre"
                            {...register("nombre",
                                { required: true, maxLength: 70 })}
                        />
                        {errors.nombre &&
                            errors.nombre.type === 'required' &&
                            'Campo nombre requerido'}
                        {errors.curso &&
                            errors.curso.type === 'maxLength' &&
                            'Máximo 30 caracteres'}
                        <input type="text"
                            name='horas'
                            placeholder='horas'
                            {...register("horas",
                                { required: true, maxLength: 30 })}
                        />
                        {errors.horas &&
                            errors.horas.type === 'required' &&
                            'Campo horas requerido'}
                        {errors.horas &&
                            errors.horas.type === 'maxLength' &&
                            'Máximo 30 caracteres'}
                        <input type="text"
                            name='precio'
                            placeholder='Precio'
                            {...register("precio",
                                { required: true, maxLength: 16 })}
                        />
                        {errors.precio &&
                            errors.precio.type === 'required' &&
                            'Campo contraseña requerido'}
                        {errors.precio &&
                            errors.precio.type === 'maxLength' &&
                            'Maximo 16 caracteres'}


                        <input type="submit" value="Crear" />
                    </form>
                </div>

            </div>
            <div className='div-buscar' >
                <Buscar />
            </div>
            <div className='div-pintacurso'>
                <Cursos />
            </div>
        </div>

    )
}

export default FormNewCurso