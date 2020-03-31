import axios from 'axios';
import { FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_ERROR,
    ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS, ADD_STUDENT_ERROR,
    UPDATE_STUDENTDATA_REQUEST, UPDATE_STUDENTDATA_SUCCESS, UPDATE_STUDENTDATA_ERROR,
     SEARCH_STUDENT, OPEN_STUDENT_POPUP, CLOSE_STUDENT_POPUP, OPEN_ADD_STUDENT_POPUP, CLOSE_ADD_STUDENT_POPUP
} from "./studentTypes";
import { clearStudentForm } from '../studentForm/studentFormActions';
import { actions } from 'react-redux-form';

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
        dispatch(fetchStudentsRequest());
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

export const addStudentRequest = () => {
    return {
        type: ADD_STUDENT_REQUEST
    }
}

const addStudentSuccess = student => {
    return {
        type: ADD_STUDENT_SUCCESS,
        payload: student
    }
}

const addStudentError = error => {
    return {
        type: ADD_STUDENT_ERROR ,
        payload: error
    }
}

export const addStudent = student => {
    return (dispatch) => {
        dispatch(addStudentRequest());
        // TODO: Change to take argument
        axios.post('http://localhost:3000/students', student)
        .then(response => {
            console.log(response.data);
            dispatch(addStudentSuccess());
            dispatch(clearStudentForm());
            dispatch(actions.reset('studentForm')); 
            dispatch(fetchStudents());
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(addStudentError(errorMsg));
        })
    }
}

export const searchStudent = term => {
    return {
        type: SEARCH_STUDENT,
        payload: term
    }
}

export const setAddStudentPopup = value => {
    return dispatch => {
        if ( value ) {
            dispatch(openAddStudentPopup());
        } else {
            dispatch(actions.reset('studentForm'));
            dispatch(closeAddStudentPopup());
        }
    }
}

const openAddStudentPopup = () => {
    return {
        type: OPEN_ADD_STUDENT_POPUP
    }
}

const closeAddStudentPopup = () => {
    return {
        type: CLOSE_ADD_STUDENT_POPUP
    }
}

export const setStudentPopup = (value, student) => {
    return dispatch => {
        if ( value ) {
            dispatch(openStudentPopup(student));
        } else {
            dispatch(closeStudentPopup());
        }
    }
}

const openStudentPopup = student => {
    return {
        type: OPEN_STUDENT_POPUP,
        payload: student
    }
}

const closeStudentPopup = () => {
    return {
        type: CLOSE_STUDENT_POPUP
    }
}

export const updateStudentdataRequest = () => {
    return {
        type: UPDATE_STUDENTDATA_REQUEST
    }
}

const updateStudentdataSuccess = () => {
    return {
        type: UPDATE_STUDENTDATA_SUCCESS,
    }
}

const updateStudentdataError = error => {
    return {
        type: UPDATE_STUDENTDATA_ERROR ,
        payload: error
    }
}

export const addStudentsCourse = (student, courseId) => {
    return (dispatch) => {
        student.courses.push(courseId);
        console.log(student);
        dispatch(updateStudentdataRequest());
        // TODO: Change to take argument
        axios.put('http://localhost:3000/students/' + student.id, student)
        .then(response => {
            console.log(response.data);
            dispatch(fetchStudents());
            dispatch(updateStudentdataSuccess());
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(updateStudentdataError(errorMsg));
        })
    }
}

export const deleteStudentsCourse = (student, courseId) => {
    return (dispatch) => {
        const index = student.courses.indexOf(courseId);
        if (index > -1) {
            student.courses.splice(index, 1);
        }
        console.log(student);
        dispatch(updateStudentdataRequest());
        // TODO: Change to take argument
        axios.put('http://localhost:3000/students/' + student.id, student)
        .then(response => {
            console.log(response.data);
            dispatch(fetchStudents());
            dispatch(updateStudentdataSuccess());
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(addStudentError(errorMsg));
            dispatch(updateStudentdataError(errorMsg));
        })
    }
}