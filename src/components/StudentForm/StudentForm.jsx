import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Control, Errors } from 'react-redux-form';
import { addStudent } from '../../redux';

import {validation} from './Validation.js';
import StudentFormInput from './StudentFormInput';

function StudentForm() {
    const dispatch = useDispatch();
    
    return (
        <Form className="col-11 mx-auto" model="studentForm" onSubmit={() => dispatch(addStudent())}>
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
                <StudentFormInput id={'studentForm.zipCode'} label={'Zipcode:'}
                    errors={validation.errors.zipCode}
                    errorMessages={validation.errorMessages.zipCode}
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
      </Form>
    )
}

export default StudentForm
