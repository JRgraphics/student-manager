import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Control, Errors } from 'react-redux-form';
import { addStudent } from '../../redux';

import './Validators.js';

function StudentForm() {
    const dispatch = useDispatch();
    const isEmail = val => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(val).toLowerCase())
    }
    return (
        <Form className="col-11 mx-auto" model="studentForm" onSubmit={() => dispatch(addStudent())}>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="studentForm.name">Name:</label><br />
                    <Control.text model="studentForm.name" id="studentForm.name" validators={{
                        required: (val) => !!val.length,
                    }}
                    validateOn="change"
                    />
                    <Errors
                        model="studentForm.name"
                        messages={{
                            required: 'Please provide a name.'
                        }}
                        show="touched"
                    />
                </div>

                <div className="col-4">
                    <label htmlFor="studentForm.birthday">Birthday:</label><br />
                    <Control.text model="studentForm.birthday" id="studentForm.birthday" validators={{
                        required: (val) => !!val.length,
                    }}
                    validateOn="change"
                    />
                    <Errors
                        model="studentForm.birthday"
                        messages={{
                            required: 'Please provide a birthday.'
                        }}
                        show="touched"
                    />
                </div>

            </div>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="studentForm.address">Address:</label><br />
                    <Control.text model="studentForm.address" id="studentForm.address" validators={{
                    required: (val) => !!val.length
                    }}
                    validateOn="blur"
                    />
                    <Errors
                        model="studentForm.address"
                        messages={{
                            required: 'Please provide an address.'
                        }}
                        show="touched"
                    />
                </div>
                <div className="col-4">
                    <label htmlFor="studentForm.zipCode">Zipcode:</label><br />
                    <Control.text model="studentForm.zipCode" id="studentForm.zipCode" validators={{
                    required: (val) => !!val.length
                    }}
                    validateOn="blur"
                    />
                    <Errors
                        model="studentForm.zipCode"
                        messages={{
                            required: 'Please provide an zipcode.'
                        }}
                        show="touched"
                    />
                </div>
                <div className="col-4">
                    <label htmlFor="studentForm.city">City:</label><br />
                    <Control.text model="studentForm.city" id="studentForm.city" validators={{
                    required: (val) => !!val.length
                    }}
                    validateOn="blur"
                    />
                    <Errors
                        model="studentForm.city"
                        messages={{
                            required: 'Please provide an city.'
                        }}
                        show="touched"
                    />
                </div>

            </div>

            <div className="row">
                <div className="col-4">
                    <label htmlFor="studentForm.phone">Phone:</label><br />
                    <Control.text model="studentForm.phone" id="studentForm.phone" validators={{
                        required: (val) => !!val.length,
                    }}
                    validateOn="change"
                    />
                    <Errors
                        model="studentForm.phone"
                        messages={{
                            required: 'Please provide a phonenumber.'
                        }}
                        show="touched"
                    />
                </div>

                <div className="col-4">
                    <label htmlFor="studentForm.email">Email:</label><br />
                    <Control.text model="studentForm.email" id="studentForm.email" errors={{
                        required: (val) => !val || !val.length,
                        isEmail: (val) => !isEmail(val) && !!val.length
                    }}
                    validateOn="change"
                    />
                    <Errors
                        model="studentForm.email"
                        messages={{
                            required: 'Please provide an email.',
                            isEmail: 'Please provide a valid email.'
                        }}
                        show="touched"
                    />
                </div>

            </div>

            <button type="submit">
                Add Student
            </button>
      </Form>
    )
}

export default StudentForm
