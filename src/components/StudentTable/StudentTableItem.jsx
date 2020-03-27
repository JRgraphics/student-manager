import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { openStudentPopup, closeStudentPopup } from '../../redux';

function StudentTableItem(props) {
    const dispatch = useDispatch();
    return (
            <tr key={props.index} onClick={() => dispatch(openStudentPopup(props.value))}>
                <td data-label="Name">{props.value.name}</td>
                <td data-label="Address">{props.value.address}</td>
                <td data-label="Email">{props.value.email}</td>
                <td data-label="Phone">{props.value.phone}</td>
                <td data-label="Birthday">{props.value.birthday}</td>
            </tr>
    )
}

export default StudentTableItem
