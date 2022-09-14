import '../App.css';
import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";


const FormLogin = (props) => {

    const navegar = useNavigate();
    const { gestionLogin } = props;


    // const URL = 'http://localhost:3000/api/docente/login'
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            console.log(emailLogin);
            console.log(passwordLogin);
            // await axios.post(URL+"/login"),{
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/docente/login`, {
                email: emailLogin,
                password: passwordLogin
            }).then((respuesta) => {
                console.log(respuesta.data);
                localStorage.setItem(
                    //*Key:value
                    'datosUsuario',
                    JSON.stringify({
                        userId: respuesta.data.userId,
                        token: respuesta.data.token,
                    })
                );
                gestionLogin(respuesta.data);
                navegar('/')
            }).catch((error) => { console.log(error) })
        } catch (error) {
            console.log(error.message);
        }
    }

    const gestorMail = (e) => {
        setEmailLogin(e.target.value)
    }
    const gestorPassword = (e) => {
        setPasswordLogin(e.target.value)
    }
    useEffect(() => { }, [])

    return (
        <div className='Form'>
            <div className='title'>Log in</div>
            <form className='inputs' action="#">
                <div >
                    <input
                        onChange={gestorMail}
                        type="email"
                        name='email'
                        id='email'
                        className='form-email'
                        placeholder='Introduzca su Email'
                        required='required'
                        value={emailLogin}
                    />

                </div>
                <div className='inputBox'>
                    <input
                        onChange={gestorPassword}
                        type="password"
                        name='password'
                        id='password'
                        className='form-password'
                        placeholder='Introduzca su Contraseña'
                        required='required'
                        value={passwordLogin}
                    />

                </div>
                <button className='btn' type='submit' onClick={loginUser}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default FormLogin