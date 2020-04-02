import React from 'react';
import { Control, Errors } from 'react-redux-form';

function StudentFormInput(props) {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <label htmlFor={props.id}>{props.label}</label><br />
            <Control.text model={props.id} id={props.id} className="student-form__input" errors={props.errors}
            validateOn="change"
            defaultValue=""
            />
            <Errors
                model={props.id} messages={props.errorMessages}
                show="touched"
            />
        </div>
    )
}

export default StudentFormInput
