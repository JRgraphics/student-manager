import { FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_ERROR } from "./studentTypes"

const initialState = {
    loading: false,
    student: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_STUDENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                student: action.payload
            }
        
        case FETCH_STUDENT_ERROR:
            return {
                ...state,
                loading: false,
                student: [],
                error: action.payload
            }

        default: return state;
    }
}

export default reducer;