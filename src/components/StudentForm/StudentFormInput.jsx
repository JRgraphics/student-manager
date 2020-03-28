import React from 'react';
import { Form, Control, Errors } from 'react-redux-form';

function StudentFormInput(props) {
    return (
        <div className="col-4">
            <label htmlFor={props.id}>{props.label}</label><br />
            <Control.text model={props.id} id={props.id} errors={props.errors}
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
