import '../Buscar.css'

const Tabla = ({ datos }) => {
	return (
		<table className='tabla'>
			<tbody>
				<tr>
					<th>Curso</th>
					<th>Docente</th>
					<th>Horas</th>
					<th>Precio</th>
				</tr>
				{datos.map((dato) => (
					<tr key={dato._id}>
						<td>{dato.nombre}</td>
						{dato.docente !== null ? (
							<td>{dato.docente.nombre}</td>
						) : (
							<td>No Asignado</td>
						)}
						<td>{dato.horas}</td>
						<td>{dato.precio}</td>
					</tr>
				))}

			</tbody>
		</table>
	);
};

export default Tabla;
