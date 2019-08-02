import React from 'react';
import './Formulario.css';
import { connect } from 'react-redux';
import { CALCULATE, SAVE_VALIDATION } from '../../store/actions';

const calculate = props =>{ //Función que realiza la validación de si es par o impar, y envía los datos obtenidos al dispatch para que luego este ejecute las actions
    let number = document.getElementById("number").value;
    let result = number % 2;
    props.validateNumber(result);
    props.saveValidation(number);
}

const Formulario = props => {
        return(
            <div className="form-box">
                <div className="form-header">
                    <h3>¿Par o Impar?</h3>
                </div>
                <div className="form-body">
                    <input type='number' placeholder="ingresa un número" id="number"/>
                    <button onClick={() => calculate(props)}>Validar</button> 
                </div>
                <div className="form-result">
                    <h2>Resultado:</h2>
                    {props.validation !== '' ? <p>El número {props.validation} es {props.result ? 'Impar' : 'Par'}</p> : 'No ha ingresado un número' }
                    
                </div>
            </div>
        )
}

const mapStateToProps = state => ({ //envia el estado actual al formulario
    result: state.result,
    validation: state.validation
})

const mapDispatchToProps = dispatch => ({ //Se utiliza el dispatch para ejecutar las acciones 
    validateNumber(result){
        dispatch({
            type: CALCULATE,
            result
        })
    },
    saveValidation(validation){
        dispatch({
            type: SAVE_VALIDATION,
            validation,
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);