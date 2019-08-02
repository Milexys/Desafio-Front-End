import { createStore } from 'redux';
import { SAVE_VALIDATION, CALCULATE } from './actions';
import { saveValidation, calculate } from './reducer';

const reducer = (state, action) => {
    switch (action.type){ //dependiendo de cada caso realiza la accion
        case SAVE_VALIDATION:
            return saveValidation(state, action);
        case CALCULATE:
            return calculate(state, action);
            default:
                return state;
    }
}

const initialState = {
    validation: '',
    result: 0
}

export default createStore(reducer, initialState);