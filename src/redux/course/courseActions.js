import axios from 'axios';
import { FETCH_COURSE_REQUEST, FETCH_COURSE_SUCCESS, FETCH_COURSE_ERROR } from "./courseTypes"

/*------------------
 Actions which are dispatched based on the status of the result of the related axios method
    in fetchCourses
    -------------------------*/

export const fetchCoursesRequest = () => {
    return {
        type: FETCH_COURSE_REQUEST
    }
}

const fetchCoursesSuccess = course => {
    return {
        type: FETCH_COURSE_SUCCESS,
        payload: course
    }
}

const fetchCoursesError = error => {
    return {
        type: FETCH_COURSE_ERROR ,
        payload: error
    }
}

/*------------------
 Action which fetched course data from the database
    -------------------------*/

export const fetchCourses = () => {
    return (dispatch) => {
        dispatch(fetchCoursesRequest);
        // TODO: Change to take argument
        axios.get('http://localhost:3000/courses')
        .then(response => {
            const course = response.data;
            dispatch(fetchCoursesSuccess(course));
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchCoursesError(errorMsg));
        })
    }
}
