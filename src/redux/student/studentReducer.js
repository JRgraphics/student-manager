import { FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_ERROR, SEARCH_STUDENT } from "./studentTypes"

const initialState = {
    loading: false,
    student: [],
    error: '',
    search_term: ''
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

        case SEARCH_STUDENT:
            return {
                ...state,
                search_term: action.payload
            }

        default: return state;
    }
}

export default reducer;