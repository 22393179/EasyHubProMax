import React, { useState } from 'react'
import './Login.css'
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import Swal from "sweetalert2";


const Login = () => {
    {/*mostar o no mostrar contraseña*/ }
    const [showPassword, setShowPassword] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    {/*funcion mostar o no mostrar contraseña*/ }
    const funcionShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            Swal.fire('Error', 'Por favor , complete todos los campos', 'error')
        }else{
            console.log("Correo electrónico:", email);
            console.log("Contraseña:", password);
        }

    }


    return (
        <div className='contenedor'>
            <div className='contenedorTitulo'>
                <h1 className='titulo'>Iniciar Sesión</h1>
            </div>
            <form className='formulario' onSubmit={handleSubmit}>
                <div className='contenedorEmail'>
                    <RiMailLine className='imgCorreo' />
                    <input type='email' placeholder='Correo electronico' className='correo' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='contenedorPassword'>
                    <RiLockLine className='imgCandado' />
                    <input type={showPassword ? 'text' : 'password'} placeholder='Contraseña' className='contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {
                        showPassword ? (
                            <RiEyeLine onClick={funcionShowPassword} className='imgOjo' />

                        ) : (
                            <RiEyeOffLine onClick={funcionShowPassword} className='imgOjo' />

                        )
                    }
                </div>

                <div>
                    <button className='boton'>Ingresar</button>
                </div>

            </form>
        </div>
    )
}

export default Login
