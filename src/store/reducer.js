export const saveValidation = (state, action) => ({
...state,
validation: state.validation.concat(action.validation),
})

export const calculate = (state, action) => ({
    ...state,
    result: action.result,
    })