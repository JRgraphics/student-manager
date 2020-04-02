import { CLEAR_STUDENTFORM } from "./studentFormTypes";


const initialState = {
    name: '',
    birthday: '',
    address: '',
    zipcode: '',
    city: '',
    phone: '',
    email: '',
    courses: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CLEAR_STUDENTFORM:
            return {
                ...initialState
            }

        default: return state;
    }
}

export default reducer;