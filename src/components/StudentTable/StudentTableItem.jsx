import React from 'react';
import { useDispatch } from 'react-redux';
import Moment from 'react-moment';
import { setStudentPopup } from '../../redux';

function StudentTableItem(props) {
    const dispatch = useDispatch();
    return (
            <tr className="student-table__row" key={props.index} onClick={() => dispatch(setStudentPopup("student_info", true, props.value))}>
                <td className="student-table__row__item" data-label="Name">{props.value.name}</td>
                <td className="student-table__row__item" data-label="Address">{props.value.address}</td>
                <td className="student-table__row__item" data-label="Email">{props.value.email}</td>
                <td className="student-table__row__item" data-label="Phone">{props.value.phone}</td>
                <td className="student-table__row__item" data-label="Birthday"><Moment format="D.M.YYYY" date={props.value.birthday}/></td>
            </tr>
    )
}

export default StudentTableItem
