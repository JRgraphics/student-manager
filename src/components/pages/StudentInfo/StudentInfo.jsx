import React, {useRef} from 'react';
import { connect } from 'react-redux';
import './StudentInfo.sass';

import CourseItem from './CourseItem';
import ClosePopupButton from '../../ClosePopupButton';
import StudentInfoContent from './StudentInfoContent';

function StudentInfo({ studentData, courseData, selected_student }) {
    const student_popup_ref = useRef(null);
    return studentData && courseData && studentData.student_popup_status && selected_student !== {} ? (
        <div ref={student_popup_ref} className="student-popup student-popup--active">
            <div className="student-popup__container col-lg-8 col-md-8 text-center">
                <ClosePopupButton popup_ref={student_popup_ref} caller={"student_info"} />
                <StudentInfoContent />
                <h2>Courses</h2>
                <h4>Attended courses:</h4>
                <table className="mx-auto">
                    <tbody>
                        <thead>
                            <td></td><td></td>
                        </thead>
                    {selected_student.courses && selected_student.courses.map((value) => {
                        const courseRender = courseData.course.find(item => item.id === value);
                        if (courseRender !== undefined) {
                            return (
                                <CourseItem course={courseRender} type={"delete"} />
                            )
                        } else {
                            return (
                                null
                            )
                        }
                    }
                    )}
                    </tbody>
                </table>
                <h4>Available courses:</h4>
                <table className="mx-auto">
                    <tbody>
                    {courseData.course.map((item) => {
                        if ( !selected_student.courses.includes(item.id)) {
                            return (
                                <CourseItem course={item} type={"add"} />
                            )
                        } else {
                            return (
                                null
                            )
                        }
                    }
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    ) : (
        null
    )
}

const mapStateToProps = state => {
    return {
        studentData: state.student,
        courseData: state.course,
        selected_student: state.student.student_popup_target
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);

