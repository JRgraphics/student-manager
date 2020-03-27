import { FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, 
    FETCH_STUDENT_ERROR, SEARCH_STUDENT, OPEN_STUDENT_POPUP, CLOSE_STUDENT_POPUP } from "./studentTypes"

const initialState = {
    loading: false,
    student: [],
    error: '',
    search_term: '',
    student_popup_status: false,
    student_popup_target: {}
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

        case OPEN_STUDENT_POPUP:
        return {
            ...state,
            student_popup_status: true,
            student_popup_target: action.payload
        }

        case CLOSE_STUDENT_POPUP:
        return {
            ...state,
            student_popup_status: false
        }

        default: return state;
    }
}

export default reducer;