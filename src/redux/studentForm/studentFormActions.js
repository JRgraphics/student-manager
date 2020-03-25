import { ADD_STUDENT } from "./studentFormTypes"

export const addStudent = student => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}