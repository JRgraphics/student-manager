import { FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_ERROR,
    ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS, ADD_STUDENT_ERROR,
    UPDATE_STUDENTDATA_REQUEST, UPDATE_STUDENTDATA_SUCCESS, UPDATE_STUDENTDATA_ERROR,
     SEARCH_STUDENT, OPEN_ADD_STUDENT_POPUP, CLOSE_ADD_STUDENT_POPUP, OPEN_STUDENT_POPUP, CLOSE_STUDENT_POPUP } from "./studentTypes";

const initialState = {
    loading: false,
    student: [],
    error: '',
    search_term: '',
    student_popup_status: false,
    student_popup_target: {},
    add_student_display: false,
    add_student_loading: false,
    add_student_error: '',
    update_student_data: {
        loading: false,
        error: ''
    }
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

        case ADD_STUDENT_REQUEST:
            return {
                ...state,
                add_student_loading: true
            }
        
        case ADD_STUDENT_SUCCESS:
            return {
                ...state,
                add_student_loading: false,
            }
        
        case ADD_STUDENT_ERROR:
            return {
                ...state,
                add_student_loading: false,
                add_student_error: action.payload
            }

        case UPDATE_STUDENTDATA_REQUEST:
            return {
                ...state,
                update_student_data: {
                    loading: true
                }
            }

        case UPDATE_STUDENTDATA_SUCCESS:
            return {
                ...state,
                update_student_data: {
                    loading: false
                }
            }

        case UPDATE_STUDENTDATA_ERROR:
            return {
                ...state,
                update_student_data: {
                    loading: false,
                    error: action.payload
                }
        }

        case SEARCH_STUDENT:
            return {
                ...state,
                search_term: action.payload
            }

        case OPEN_ADD_STUDENT_POPUP:
            return {
                ...state,
                add_student_display: true,
            }

        case CLOSE_ADD_STUDENT_POPUP:
            return {
                ...state,
                add_student_display: false,
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