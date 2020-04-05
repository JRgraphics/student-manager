import { CLEAR_STUDENTFORM } from './studentFormTypes';

/*------------------
 Actions which clears student-forms' data
    -------------------------*/

export const clearStudentForm = () => {
    return {
        type: CLEAR_STUDENTFORM
    }
}