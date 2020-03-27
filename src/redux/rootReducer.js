import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import studentReducer from './student/studentReducer';
import courseReducer from './course/courseReducer';
import studentFormReducer from './studentForm/studentFormReducer';

const rootReducer = combineReducers({
    student: studentReducer,
    course: courseReducer,
    ...createForms({
        studentForm: studentFormReducer,
      }),
});

export default rootReducer;