import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLayouts from './pages/Layouts/AuthLayouts';

{/*Paginas*/ }
import Login from './pages/Login/Login';
import InicioLider from './pages/InicioLider/InicioLider';

{/*Visualiza una página al usuario donde no se ha definido ninguna ruta*/ }
import Error404 from './pages/404/404';

function App() {
  return (
    
    <Routes>
      {/*Todas las paginas mantendran el mismo estilo*/}
      <Route path='/' element={<AuthLayouts />}>
        <Route index element={<Login />} />
      </Route>
      {/*Rutas para el lider*/}
      <Route path='inicioLider' element={<InicioLider />} />

      {/*ruta cuando no existe ninguna ruta definida*/}
      <Route path='*' element={<Error404 />} />

    </Routes>
  )
}

export default App;
