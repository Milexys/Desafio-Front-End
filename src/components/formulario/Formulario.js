import React from 'react';
import './Formulario.css';

const Formulario = (props) => {
        return(
            <div className="form-box">
                <div className="form-header">
                    <h3>¿Par o Impar?</h3>
                </div>
                <div className="form-body">
                    <input type='number' placeholder="ingresa un número"/>
                    <button>Validar</button>
                </div>
                <div className="form-result">
                    <h2>Resultado:</h2>
                    <p>El número __ es ____ </p>
                </div>
            </div>
        )
}

export default Formulario;