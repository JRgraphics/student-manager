import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { Form, Control} from 'react-redux-form';
import { addStudent } from '../../redux';

import {validation} from './Validation.js';
import StudentFormInput from './StudentFormInput';

function StudentForm({studentData, studentFormData}) {
    const dispatch = useDispatch();
    
    return studentData && studentData.add_student_display ? (
        <Form className="col-11 mx-auto" model="studentForm" onSubmit={() => dispatch(addStudent(studentFormData))}>
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

            <button type="submit">
                Add Student
            </button>
            <Control.reset model="studentForm" type="reset">
                Reset
            </Control.reset>
      </Form>
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
