export const makeValidation = (state, action) => ({
...state,
validation: state.validation.concat(action),
})