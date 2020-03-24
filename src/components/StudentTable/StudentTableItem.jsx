import React from 'react';

function StudentTableItem(props) {
    return (
            <tr key={props.index}>
            <td data-label="Name">{props.value.name}</td>
            <td data-label="Address">{props.value.address}</td>
            <td data-label="Email">{props.value.email}</td>
            <td data-label="Phone">{props.value.phone}</td>
            <td data-label="Birthday">{props.value.birthday}</td>
        </tr>
    )
}

export default StudentTableItem
