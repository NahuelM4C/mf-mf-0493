import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Tabla from '../components/Tabla';
import '../Buscar.css';

const Buscar = () => {
	// URL = 'https://strong-planet-361708.nw.r.appspot.com/api'
	const [query, setQuery] = useState('');
	const [datos, setDatos] = useState([]);

	const gestorBusca = (e) => {
		setQuery(e.target.value);
	};

	const gestorTecla = (e) => {
		const tecla = e.target.value;
		console.log(tecla);
	};

	useEffect(() => {
		const recupera = async () => {
			if (query.length === 0) {
				// const res = await axios.get(URL + "/cursos")
				const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cursos`);
				setDatos(res.data.cursos);
			} else {
				const res = await axios.get(
					`${process.env.REACT_APP_BACKEND_URL}/cursos/buscar/${query}`
				);
				setDatos(res.data.cursos);
			}
		};
		recupera();
	}, [query]);

	return (
		<div className='listItem'>
			<input
				type='text'
				name='busca'
				placeholder='buscar'
				onChange={gestorBusca}
				onKeyDown={gestorTecla}
			/>
			<Tabla datos={datos} />
		</div>
	);
};

export default Buscar;
