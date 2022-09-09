const axios = require('axios');


const getDocente = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/docente');

        const allDocente = response.data.docentes;

        console.log(`GET: Here's the list of todos`, allDocente);

        return allDocente;
    } catch (error) {
        console.error(error);
    }
};
const docentesGet = getDocente()
console.log(docentesGet)
// getDocente();

const getOneDocente = async (idDocente) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/docente/${idDocente}`);
        const oneDocente = response.data.docente;
        return oneDocente;

    } catch (error) {
        console.error(error);
    }
}
// getOneDocente("630c8af9b29ab6c8770dafe9").then((datos) => { console.log(datos) });

const postDocente = async (nombre, email, password, activo) => {
    await axios.post('http://localhost:3000/api/docente', {
        nombre: nombre,
        email: email,
        password: password,
        activo: activo,

    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

// postDocente("Samuel", "co@bra.dor", "1l41251ssd1", true).then(() => { console.log("Docente creado") });

const patchDocente = async (idDocente, camposPorCambiar) => {
    await axios.patch(`http://localhost:3000/api/docente/${idDocente}`, camposPorCambiar)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

//let camposPorCambiar = { nombre: "Gabriel" };
//patchDocente("6307ac3372597957b1e5f063", camposPorCambiar);

const deleteDocente = async (idDocente) => {
    await axios.delete(`http://localhost:3000/api/docente/${idDocente}`).then(() => {
        console.log('docente deleted');
    }).catch((error) => {
        console.log(error.message);
    });

};

//deleteDocente("6308b02237577397e376e965");


const getCursos = async () => {
    await axios.get(`http://localhost:3000/api/cursos`).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error.message)
    }
    );
}

//getCursos();

const getOneCurso = async (idCurso) => {
    await axios.get(`http://localhost:3000/api/cursos/${idCurso}`, {}).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error.message)
    })
};
//getOneCurso("63077910cfff5c08ea826f63");

const postCurso = async (nombre, horas, precio, docente) => {
    await axios.post(`http://localhost:3000/api/cursos`, {
        nombre: nombre,
        horas: horas,
        precio: precio,
        docente: docente
    }).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error.message);
    })
}

// postCurso("Ethical design", "500", 200, "630883932b8405d27db82ccd");

const patchCurso = async (idCurso, camposPorCambiar) => {
    await axios.patch(`http://localhost:3000/api/cursos/${idCurso}`, camposPorCambiar)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};
//let camposPorCambiar = { nombre: "NODE.JS" };
//patchCurso("630b57c30704c393d20394df", camposPorCambiar);


const deleteCurso = async (idCurso) => {
    await axios.delete(`http://localhost:3000/api/cursos/${idCurso}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => { console.log(error.message); })
}

// deleteCurso("63077910cfff5c08ea826f63")
