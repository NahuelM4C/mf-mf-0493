import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import FormLogin from "./components/FormLogin";
import FormSingUp from "./components/FormSingUp";
import Docente from "./components/Docente";
import Inicio from "./components/Inicio";
import Error from "./components/Error";
import FormNewCurso from './components/FormNewCurso';
import ModDocent from './components/ModDocent';
import Logout from './components/Logout';


function App() {

  const datosUsuario = localStorage.getItem("DatosUsuario");
  const datosRecuperar = datosUsuario ? JSON.parse(datosUsuario) : null;
  const [conAcceso, setConAcceso] = useState(datosRecuperar !== null);

  const gestionLogin = (dato) => {
    setConAcceso(dato);
    console.log(conAcceso)
  }

  return (
    <div className="App">
      <Router className='router'>
        <header className='#'>
          <div className='head'>
            {conAcceso === false || conAcceso === null ? (
              <div className='navLinks'>
                <NavLink className={'navLink'} to='/'>Inicio</NavLink>
                <NavLink className={'navLink'} to='/docente/login'>Acceso</NavLink>
                <NavLink className={'navLink'} to='/docente'>Sign Up</NavLink>
              </div>
            ) : (
              <div className='navLinks'>
                <NavLink className={'navLink'} to='/'>Inicio</NavLink>
                <NavLink className={'navLink'} to='/cursos'>Cursos</NavLink>
                <NavLink className={'navLink'} to='/docentes'>Docentes</NavLink>
                <NavLink className={'navLink'} to='/logout'>Logout </NavLink>
              </div>
            )}
          </div>
          <div className="routes">
            <Routes >
              <Route path='/' element={<Inicio gestionLogin={gestionLogin} />} />
              <Route path='/docente/login'
                element={<FormLogin gestionLogin={gestionLogin} />} />
              <Route path='/docentes/' element={<Docente gestionLogin={gestionLogin} />} />
              <Route path='/docente' element={<FormSingUp />} />
              <Route path='/cursos' element={<FormNewCurso gestionLogin={gestionLogin} />} />
              {/* <Route path='/modDoc' element={<ModDocent gestionLogin={gestionLogin} />} /> */}
              <Route path='/logout'
                element={<Logout gestionLogin={gestionLogin} />} />
              <Route path='/404' element={<Error />} />
              <Route path='/*' element={<Navigate to='/404' replace />} />
            </Routes>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App;
