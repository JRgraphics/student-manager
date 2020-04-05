import axios from 'axios';
import { FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_ERROR,
    ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS, ADD_STUDENT_ERROR,
    UPDATE_STUDENTDATA_REQUEST, UPDATE_STUDENTDATA_SUCCESS, UPDATE_STUDENTDATA_ERROR,
     SEARCH_STUDENT, OPEN_STUDENT_POPUP, CLOSE_STUDENT_POPUP, OPEN_ADD_STUDENT_POPUP, CLOSE_ADD_STUDENT_POPUP
} from "./studentTypes";
import { clearStudentForm } from '../studentForm/studentFormActions';
import { actions } from 'react-redux-form';

/*------------------
 Actions which are dispatched based on the status of the result of the related axios method
    in fetchStudents
    -------------------------*/

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

/*------------------
 Action which fetched student data from the database
    -------------------------*/

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

/*------------------
 Actions which are dispatched based on the status of the result of the related axios method
    in addStudent
    -------------------------*/

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

/*------------------
 Action which adds new student to the database with appropriate values from studentForm
    -------------------------*/

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
            dispatch(setAddStudentPopup(false));
            dispatch(fetchStudents());
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(addStudentError(errorMsg));
        })
    }
}

/*------------------
 Action for filtering presented data in the student-table
    -------------------------*/

export const searchStudent = term => {
    return {
        type: SEARCH_STUDENT,
        payload: term
    }
}

/*------------------
 Action which dispatches appropriate actions based on the implemented values
    to open or close student-form popup
    -------------------------*/

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

/*------------------
 Actions for opening and closing student-form popup,
    which are dispatched by setAddStudentPopup
    -------------------------*/

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

/*------------------
 Action which dispatches appropriate actions based on the implemented values
    to open or close student-info popup
    -------------------------*/

const setStudentInfoPopup = (value, student) => {
    return dispatch => {
        if ( value && student && student !== {} ) {
            dispatch(openStudentInfoPopup(student));
        } else {
            dispatch(closeStudentInfoPopup());
        }
    }
}

/*------------------
 Actions for opening and closing student-info popup,
    which are dispatched by setStudentInfoPopup
    -------------------------*/

const openStudentInfoPopup = student => {
    return {
        type: OPEN_STUDENT_POPUP,
        payload: student
    }
}

const closeStudentInfoPopup = () => {
    return {
        type: CLOSE_STUDENT_POPUP
    }
}

/*------------------
 Action which dispatched appropriate actions to open or close popup-windows 
    based on the implemented values
    -------------------------*/

export const setStudentPopup = (caller, value, student) => {
    return dispatch => {
        if ( caller === "student_form" ) {
            dispatch(setAddStudentPopup(value));
        } else if ( caller === "student_info" ) {
            dispatch(setStudentInfoPopup(value, student))
        } else {
            // No statement
        }
    }
}

/*------------------
 Actions which are dispatched based on the status of the result of the related axios method
    in addStudentsCourse
    -------------------------*/

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

/*------------------
 Actions which update existing student's course attendance status
    -------------------------*/

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
        dispatch(updateStudentdataRequest());
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