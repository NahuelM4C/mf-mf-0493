import React from 'react'

const PatchCurso = () => {

    const extraerDatosUsuario = () => {
        const datosRecuperar = JSON.parse(localStorage.getItem('datosUsuario'));
        if (datosRecuperar && datosRecuperar.token) {
            console.log(datosRecuperar.token);
            return [datosRecuperar.token, datosRecuperar.userId];
        }
    };
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const modCurso = async (data) => {
        const URL = 'http://localhost:3000/api/cursos/'
        await axios
            .post(
                URL + curso._id,
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
                // setValue("nombre", null),
                // setValue("horas", null),
                // setValue("precio", null),
                // setValue("docente", null)
            )
            .then((response) => {
                console.log("Todo correcto", response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    return (

        <div className='Form'>
            <div className='title' >Modificar curso</div>
            <div className='inputs'>
                <form onSubmit={handleSubmit(modCurso)}>
                    <input type="text"
                        name='nombre'
                        placeholder="Nombre"
                        {...register("nombre",
                            { required: true, maxLength: 70, minLength: 5 })}
                    />
                    {errors.nombre &&
                        errors.nombre.type === 'required' &&
                        'Campo nombre requerido'}
                    {errors.nombre &&
                        errors.nombre.type === 'maxLength' &&
                        'Máximo 30 caracteres'}
                    {errors.nombre &&
                        errors.nombre.type === 'minLength' &&
                        'Minimo 5 caracteres'}
                    <input type="text"
                        name='horas'
                        placeholder='horas'
                        {...register("horas",
                            { required: true, maxLength: 4, minLength: 2 })}
                    />
                    {errors.horas &&
                        errors.horas.type === 'required' &&
                        'Campo horas requerido'}
                    {errors.horas &&
                        errors.horas.type === 'maxLength' &&
                        'Máximo 9999 horas'}
                    {errors.nombre &&
                        errors.nombre.type === 'minLength' &&
                        'Minimo 10 horas'}
                    <input type="number"
                        name='precio'
                        placeholder='Precio'
                        {...register("precio",
                            { required: true, maxLength: 4 })}
                    />
                    {errors.precio &&
                        errors.precio.type === 'required' &&
                        'Campo precio requerido'}
                    {errors.precio &&
                        errors.precio.type === 'maxLength' &&
                        'Maximo 9999€ '}
                    <input type="submit" value="Modificar" id="submit" />
                    <button
                        className='btn-delete'
                        onClick={async () => {
                            await axios.delete(URL + curso._id, {
                                headers: {
                                    Authorization: "Bearer " + extraerDatosUsuario()[0],
                                }
                            })
                                .then((response) => { })
                                .catch((error) => {
                                    console.log(error.response.data);
                                })
                        }}
                    >
                        Eliminar
                    </button>
                </form>
            </div>
        </div>

    )
}

export default PatchCurso