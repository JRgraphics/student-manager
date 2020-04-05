import React, { useRef } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Form, Control} from 'react-redux-form';
import { addStudent } from '../../redux';

import {validation} from './Validation.js';
import StudentFormInput from './StudentFormInput';
import ClosePopupButton from '../ClosePopupButton';

function StudentForm({studentData, studentFormData}) {
    const dispatch = useDispatch();
    const studentform_popup_ref = useRef(null);
    
    return studentData && studentData.add_student_display ? (
        <div ref={studentform_popup_ref} className="student-popup student-popup--active">
        <ClosePopupButton popup_ref={studentform_popup_ref} caller={"student_form"} />
        <h2 className="student-form__main-title text-center py-3">ADD STUDENT</h2>
        <Form className="col-11 mx-auto my-4" model="studentForm" onSubmit={() => dispatch(addStudent(studentFormData))}>
            
            <div className="row">
                <StudentFormInput id={'studentForm.name'} label={'Name:'}
                errors={validation.errors.name}
                errorMessages={validation.errorMessages.name}
                />
                <StudentFormInput id={'studentForm.birthday'} label={'Birthday:'}
                errors={validation.errors.birthday}
                errorMessages={validation.errorMessages.birthday}
                />
            </div>

            <div className="row">
                <StudentFormInput id={'studentForm.address'} label={'Address:'}
                    errors={validation.errors.address}
                    errorMessages={validation.errorMessages.address}
                />
                <StudentFormInput id={'studentForm.zipcode'} label={'Zipcode:'}
                    errors={validation.errors.zipcode}
                    errorMessages={validation.errorMessages.zipcode}
                />
                <StudentFormInput id={'studentForm.city'} label={'City:'}
                    errors={validation.errors.city}
                    errorMessages={validation.errorMessages.city}
                />
            </div>

            <div className="row">
                <StudentFormInput id={'studentForm.phone'} label={'Phone:'}
                    errors={validation.errors.phone}
                    errorMessages={validation.errorMessages.phone}
                />
                <StudentFormInput id={'studentForm.email'} label={'Email:'}
                    errors={validation.errors.email}
                    errorMessages={validation.errorMessages.email}
                />
            </div>

            <button className="btn btn-primary" type="submit">
                Add Student
            </button>

            <Control.reset className="btn btn-outline-secondary" model="studentForm" type="reset">
                Reset
            </Control.reset>

      </Form>
      </div>
    ) : (
        null
    )
}

const mapStateToProps = state => {
    return {
        studentData: state.student,
        studentFormData: state.studentForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
