import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const FormSingUp = () => {
  const navegar = useNavigate();
  // const URL = 'https://strong-planet-361708.nw.r.appspot.com/api/docente'

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const singUpForm = async (data) => {
    try {
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/docente", data);
      setValue('nombre', null);
      setValue('email', null);
      setValue('password', null);
      return console.log(response)

    } catch (error) { console.log(error) }
  }

  return (
    <div className='Form'>
      <div className='title' >Sing Up</div>
      <div className='inputs'>
        <form onSubmit={handleSubmit(singUpForm)}>
          <input type="text"
            name='nombre'
            placeholder="Nombre"
            {...register("nombre",
              { required: true, maxLength: 30 })}
          />
          {errors.nombre &&
            errors.nombre.type === 'required' &&
            'Campo nombre requerido'}
          {errors.nombre &&
            errors.nombre.type === 'maxLength' &&
            'Máximo 30 caracteres'}
          <input type="text"
            name='email'
            placeholder='Email'
            {...register("email",
              { required: true, maxLength: 30 })}
          />
          {errors.email &&
            errors.email.type === 'required' &&
            'Campo email requerido'}
          {errors.email &&
            errors.email.type === 'maxLength' &&
            'Máximo 30 caracteres'}
          <input type="password"
            name='password'
            placeholder='Contraseña'
            {...register("password",
              { required: true, maxLength: 16 })}
          />
          {errors.password &&
            errors.password.type === 'required' &&
            'Campo contraseña requerido'}
          {errors.password &&
            errors.password.type === 'required' &&
            'Maximo 16 caracteres'}

          <input type="submit" />

        </form>
      </div>
    </div>
  )
}

export default FormSingUp