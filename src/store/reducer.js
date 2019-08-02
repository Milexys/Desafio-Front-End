export const saveValidation = (state, action) => ({
...state, //copia el estado anterior
validation: action.validation, //recie el nuevo estado
})

export const calculate = (state, action) => ({
    ...state,
    result: action.result,
    })