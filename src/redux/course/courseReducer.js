import { FETCH_COURSE_REQUEST, FETCH_COURSE_SUCCESS, FETCH_COURSE_ERROR } from "./courseTypes"

const initialState = {
    loading: false,
    course: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                course: action.payload
            }
        
        case FETCH_COURSE_ERROR:
            return {
                ...state,
                loading: false,
                course: [],
                error: action.payload
            }

        default: return state;
    }
}

export default reducer;