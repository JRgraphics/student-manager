import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addStudentsCourse, deleteStudentsCourse } from '../../../redux';

import delete_icon from '../../../assets/images/close.png';
import add_icon from '../../../assets/images/add.png';

function CourseItemButton(props) {
    const dispatch = useDispatch();
    return props.type === "add" ? (
        <button className="btn" onClick={() => dispatch(addStudentsCourse(props.selected_student, props.course.id))}>
            <img className="course-table__icon" src={add_icon} alt={"add"}/>
        </button>
    ) : (
        <button className="btn" onClick={() => dispatch(deleteStudentsCourse(props.selected_student, props.course.id))}>
            <img className="course-table__icon" src={delete_icon} alt={"delete"}/>
        </button>
    )
}

const mapStateToProps = state => {
    return {
        selected_student: state.student.student_popup_target
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseItemButton);
