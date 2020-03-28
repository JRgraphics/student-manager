import React from 'react';
import { setStudentPopup } from '../../../redux';
import { connect, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import './StudentPopup.sass';

function StudentPopup({ studentData, courseData, selected_student }) {
    const dispatch = useDispatch();
    return studentData && courseData && studentData.student_popup_status && selected_student !== {} ? (
        
        <div className="student-popup" onClick={() => dispatch(setStudentPopup(false, {}))}>
            <div className="student-popup__background"></div>
            <div className="student-popup__container">
                <h2>{selected_student.name}(
                    <Moment format="D.M.YYYY" date={selected_student.birthday}/>
                    )
                </h2>
                <p>Address:
                    {" " + selected_student.address},
                    {" " + selected_student.zipcode},
                    {" " + selected_student.city.toUpperCase()}
                </p>
                <p>Phone: {selected_student.phone}</p>
                <p>Email: {selected_student.email}</p>
                    
                <h2>Courses</h2>
                {selected_student.courses && selected_student.courses.map((value) => {
                    const courseRender = courseData.course.find(item => item.id === value);
                    if (courseRender !== undefined) {
                        return (
                            <div>
                            {courseRender.name + " "}
                            (
                            <Moment format="D.M.YYYY" date={courseRender.startdate}/> -  
                            <Moment format="D.M.YYYY" date={courseRender.enddate}/>
                            )
                            </div>
                        )
                     } else {
                         return (
                            <div style={{display: "none"}}></div>
                         )
                     }
                }
                )}
            </div>
        </div>
    ) : (
        <div style={{display: "none"}}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentPopup);

