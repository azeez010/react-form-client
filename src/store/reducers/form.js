import { COMPLETED, ERRORS, SUBMIT_FORM } from '../actions/constants'


const initialState = {
  form : {
    email: '',
    first_name: '',
    last_name: '',
    company_name: '',
    about_project: '',
    interested_in: '',
    budget: 0
  },
  isCompleted: false,
  error: ''
};

const formReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case SUBMIT_FORM:
        return { ...state, form: payload}
      case COMPLETED:
        return { ...state, isCompleted: payload}
      case ERRORS:
        return { ...state, error: payload}
        
      default:
        return state
    }
}

export default formReducer;
