import { COMPLETED, SUBMIT_FORM, ERRORS } from './constants';


export const save_form = (state) => dispatch =>{
  return dispatch({
    type: SUBMIT_FORM,
    payload: state
  })
}

export const isCompletedFunc = () => dispatch =>{
  return dispatch({
    type: COMPLETED,
    payload: true
  })
}

export const onError = (error) => dispatch =>{
  console.log(error)
  return dispatch({
    type: ERRORS,
    payload: error.error
  })
}