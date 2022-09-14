import './App.css';
import { useState } from 'react';
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

  const [conAcceso, setConAcceso] = useState(false);
  const [datos, setDatos] = useState({});
  const [token, setToken] = useState();

  const gestionLogin = (dato) => {
    setDatos(dato)
    setConAcceso(true);
    setToken(dato.token)
    console.log(conAcceso)
  }

  const gestionLogout = () => {
    setConAcceso(false)
  }

  return (
    <div className="App">
      <Router className='router'>
        <header className='#'>
          <div className='head'>
            {conAcceso === false ? (
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
                <NavLink className={'navLink'} to='/modDoc'>Ajustes </NavLink>
                <NavLink className={'navLink'} to='/logout'>Logout </NavLink>

              </div>
            )}
          </div>
          <div>
            <Routes className="routes">
              <Route path='/' element={<Inicio />} />
              <Route path='/docente/login'
                element={<FormLogin gestionLogin={gestionLogin} />} />
              <Route path='/docentes/' element={<Docente />} />
              <Route path='/docente' element={<FormSingUp />} />
              <Route path='/cursos' element={<FormNewCurso />} />
              <Route path='/modDoc' element={<ModDocent />} />
              <Route path='/logout'
                element={<Logout gestionLogout={gestionLogout} />} />
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
