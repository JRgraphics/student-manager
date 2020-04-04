import React from 'react';
import { connect } from 'react-redux';
import CourseItemButton from './CourseItemButton';
import Moment from 'react-moment';

function CourseItem(props) {
    return (
        <tr className="fade-in">
            <td className="align-middle">
                <p className="m-0">
                {props.course.name + " "}
                (
                <Moment format="D.M.YYYY" date={props.course.startdate}/> -  
                <Moment format="D.M.YYYY" date={props.course.enddate}/>
                )
                </p>
            </td>
            <td className="align-middle text-right">
                <CourseItemButton type={props.type} course={props.course} />
            </td>
        </tr>
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseItem);
