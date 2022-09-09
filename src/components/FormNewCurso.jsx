import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Cursos from './Cursos';


const FormNewCurso = () => {
    // const URL= 'https://strong-planet-361708.nw.r.appspot.com/api/cursos'
    const URL = 'http://localhost:3000/api/cursos/'
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
            .post(
                URL,
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
                console.log("Todo correcto", response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    // const crearCurso = async (data) => {
    //     await axios
    //         .post(
    //             URL,
    //             {
    //                 nombre: data.nombre,
    //                 horas: data.horas,
    //                 precio: data.precio,
    //                 docente: extraerDatosUsuario()[1],
    //             },
    //             {
    // headers: {
    //     Authorization: "Bearer " + extraerDatosUsuario()[0], // En los headers van 'Bearer ' + token recibido
    //                 },
    //             },
    // setValue("nombre", null),
    //     setValue("horas", null),
    //     setValue("precio", null),
    //     setValue("docente", null)
    //         )
    //         .then((response) => {
    //             console.log("Todo correcto", response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error.response.data);
    //         });
    // };

    return (

        <div className='Form'>
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


                    <input type="submit" value="Modificar" id="submit" />
                </form>
            </div>
            <Cursos />
        </div>

    )
}

export default FormNewCurso