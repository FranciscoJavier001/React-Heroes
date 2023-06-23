//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'

export const LoginScreen = ({ history }) => { //** El LS recibe el history(este viene de Navegador/Components/props) */

    //** Este context esta en "Aqui - src/HeroesApp", lo defini en src/auth/AuthContext */
    

    const handleLogin = () => { //** Funcion que no recibe nada */
        // history.push('/'); //** Ruta a la que voy a navegar con click en el login */
        history.replace('/'); //** Asi no hay history, y solo me lleva directamente al "/" y no puedo regresar al login manualmente */

        
    }

    return (
        <div className="container mt-5"> {/* Container, lo pone medio centrado y el mt-5 es el espacio que tiene hacia arriba */}
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary" //** btn=Boton, b-p=Color azul */
                onClick={ handleLogin } //** Metodo que se dispara*/
            >
                Login
            </button>
        </div>
    )
}