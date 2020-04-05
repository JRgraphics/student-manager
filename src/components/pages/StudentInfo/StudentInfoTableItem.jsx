import React from 'react';
import { connect } from 'react-redux';

function StudentInfoTableItem(props) {
    return (
        <td className="student-info-table__item col-md-4" data-label={props.label}>
            <span className="font-weight-bold">{props.label} </span>
            <span>
            {props.data}
            </span>
        </td>
    )
}

const mapStateToProps = state => {
    return {
        selected_student: state.student.student_popup_target
    }
}


export default connect(mapStateToProps)(StudentInfoTableItem);
