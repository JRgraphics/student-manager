import axios from 'axios';
import { FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_ERROR, SEARCH_STUDENT } from "./studentTypes"

export const fetchStudentsRequest = () => {
    return {
        type: FETCH_STUDENT_REQUEST
    }
}

const fetchStudentsSuccess = student => {
    return {
        type: FETCH_STUDENT_SUCCESS,
        payload: student
    }
}

const fetchStudentsError = error => {
    return {
        type: FETCH_STUDENT_ERROR ,
        payload: error
    }
}

export const fetchStudents = () => {
    return (dispatch) => {
        dispatch(fetchStudentsRequest);
        // TODO: Change to take argument
        axios.get('http://localhost:3000/students')
        .then(response => {
            const student = response.data;
            dispatch(fetchStudentsSuccess(student));
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchStudentsError(errorMsg));
        })
    }
}

export const searchStudent = term => {
    return {
        type: SEARCH_STUDENT,
        payload: term
    }
}