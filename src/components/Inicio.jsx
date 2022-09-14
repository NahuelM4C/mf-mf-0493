import React, { useEffect } from 'react';
import '../App.css'
import InicioJpg from '../imgs/inicio.jpg'
const Inicio = () => {

    return (
        <div>

            <h1> Inicio </h1>
            <div className='img-inicio'>
                <img src={InicioJpg} />
            </div>
        </div>
    )
}

export default Inicio