import { createStore } from 'redux';
import { MAKE_VALIDATION } from './actions';
import { makeValidation } from './reducer';

const reducer = (state, action) => {
    switch (action.type){
        case MAKE_VALIDATION:
            return makeValidation(state, action);
            default:
                return state;
    }
}

const initialState = {
    validation: [],
}

export default createStore(reducer, initialState);