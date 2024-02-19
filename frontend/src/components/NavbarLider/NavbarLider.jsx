import React from 'react'
import BlueLogo from '../../assets/BlueLogo.png'
import './NavbarLider.css'

const NavbarLider = () => {
    return (
        <header className='header'>
            <div className='logoContainer'>
                <img src={BlueLogo} alt='logo' />
                <h1 className='textContainer'>
                    <span className='colorUno'>E</span>ASY{" "}
                    <span className='colorDos'>H</span>UB
                </h1>
            </div>
            <nav className='navbar'>
                <a href='#'>Inicio</a>
                <a href='#'>Proyectos</a>
                <a href='#'>Equipos</a>
            </nav>
        </header>
    )
}

export default NavbarLider
