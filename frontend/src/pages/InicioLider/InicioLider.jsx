import React from 'react';
import NavbarLider from '../../components/NavbarLider/NavbarLider';
import './InicioLider.css';
import Activos from '../../assets/activos.png';
import Proyectos from '../../assets/proyectos.png';
import user from '../../assets/user.png';

const InicioLider = () => {
  return (
    <>
      <NavbarLider />
      <div className='contenedorDiv'>
        {/* Lado izquierdo */}
        <div className='leftPanel'>
          <section className='seccion'>
            <div className='cuadro1'>
              <div className='imagen'>
                <img src={Activos} />
              </div>
              <div className='texto'>
                <p className='parrafo'>4</p>
                <p className='parrafo2'>Maximo de proyectos</p>
              </div>
            </div>
            <div className='cuadro1'>
              <div className='imagen'>
                <img src={Proyectos} />
              </div>
              <div className='texto'>
                <p className='parrafo'>4</p>
                <p className='parrafo2'>Maximo de proyectos</p>
              </div>
            </div>
          </section>
          <section>
            <div className='contenedorRight'>
              <h3>Notificaciones</h3>
            <div>
                <span className="spanCont">
                  <img src={user} className="" />
                  Fernando Villafaña
                </span>
                <p className="parrafCont">
                  Emma, has tenido tiempo de revisar el avance del proyecto
                  Beta? Me preocupa un poco el...
                </p>
                <span className="spanCont">
                  <img src={user} className="" />
                  Fernando Villafaña
                </span>
                <p className="parrafCont">
                  Emma, has tenido tiempo de revisar el avance del proyecto
                  Beta? Me preocupa un poco el...
                </p>
                <span className="spanCont">
                  <img src={user} className="" />
                  Fernando Villafaña
                </span>
                <p className="parrafCont">
                  Emma, has tenido tiempo de revisar el avance del proyecto
                  Beta? Me preocupa un poco el...
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* Lado derecho */}
        <div className='rightPanel'>
          hgijk
        </div>
      </div>
    </>
  );
}

export default InicioLider;
