import { combineReducers } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import studentReducer from './student/studentReducer';
import studentFormReducer from './studentForm/studentFormReducer';

const rootReducer = combineReducers({
    student: studentReducer,
    ...createForms({
        studentForm: studentFormReducer,
      }),
});

export default rootReducer;