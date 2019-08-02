import React from 'react';
import './Formulario.css';
import { connect } from 'react-redux';
import { CALCULATE } from '../../store/actions';

const calculate = props =>{
    let number = document.getElementById("number").value;
    let result = number % 2;
    props.validateNumber(result);
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
                    <p>En numero {props.validation} es un número {props.result ? 'Impar' : 'Par'}</p>
                </div>
            </div>
        )
}

const mapStateToProps = state => ({
    result: state.result,
    validation: state.validation
})

const mapDispatchToProps = dispatch => ({
    validateNumber(result){
        dispatch({
            type: CALCULATE,
            result
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);