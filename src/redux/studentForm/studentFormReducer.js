import { ADD_STUDENT } from "./studentFormTypes";


const initialState = {
    name: '',
    birthday: '',
    address: '',
    zipCode: '',
    city: '',
    phone: '',
    email: '',
    submitStatus: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_STUDENT:
            return {
                ...state,
                submitStatus: true
            }

        default: return state;
    }
}

export default reducer;