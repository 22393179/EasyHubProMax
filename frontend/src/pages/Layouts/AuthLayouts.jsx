import React from 'react';
import { Outlet } from 'react-router-dom';
import './AuthLayouts.css';

{/* funciona para que todas las pantallas tenga la misma configuracion */}
const AuthLayouts = () => {
    return (
        <div className='Fondo'>
            <Outlet />
        </div>
    );
}

export default AuthLayouts;
