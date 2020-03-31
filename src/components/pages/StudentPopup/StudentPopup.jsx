import React from 'react';
import { setStudentPopup, addStudentsCourse, deleteStudentsCourse } from '../../../redux';
import { connect, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import './StudentPopup.sass';

import delete_icon from '../../../assets/images/close.png';
import add_icon from '../../../assets/images/add.png';

function StudentPopup({ studentData, courseData, selected_student }) {
    const dispatch = useDispatch();
    return studentData && courseData && studentData.student_popup_status && selected_student !== {} ? (
        
        <div className="student-popup">
            <div className="student-popup__background"></div>
            <div className="student-popup__container">
                <button className="btn student-popup__close_button" onClick={() => dispatch(setStudentPopup(false, {}))}>
                    <img className="student-popup__close_button__icon" src={delete_icon} alt={"close"} />
                </button>
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
                <h4>Attended courses:</h4>
                <table>
                <tbody>
                {selected_student.courses && selected_student.courses.map((value) => {
                    const courseRender = courseData.course.find(item => item.id === value);
                    if (courseRender !== undefined) {
                        return (
                            <tr>
                                <td>
                                {courseRender.name + " "}
                                (
                                <Moment format="D.M.YYYY" date={courseRender.startdate}/> -  
                                <Moment format="D.M.YYYY" date={courseRender.enddate}/>
                                )
                                </td>
                                <td>
                                    <button className="btn" onClick={() => dispatch(deleteStudentsCourse(selected_student, courseRender.id))}>
                                    <img className="course-table__icon" src={delete_icon} alt={"delete"}
                                    />
                                    </button>
                                </td>
                            </tr>
                        )
                     } else {
                         return (
                            <tr style={{display: "none"}}></tr>
                         )
                     }
                }
                )}
                </tbody>
                </table>
                <h4>Available courses:</h4>
                <table>
                    <tbody>
                {courseData.course.map((item) => {
                    if (!selected_student.courses.includes(item.id)) {
                        return (
                            <tr>
                                <td>
                                {item.name + " "}
                                (
                                <Moment format="D.M.YYYY" date={item.startdate}/> -  
                                <Moment format="D.M.YYYY" date={item.enddate}/>
                                )
                                </td>
                                <td>
                                    <button className="btn" onClick={() => dispatch(addStudentsCourse(selected_student, item.id))}>
                                    <img className="course-table__icon" src={add_icon} alt={"add"}/>
                                    </button>
                                </td>
                            </tr>
                        )
                     } else {
                         return (
                            <tr style={{display: "none"}}></tr>
                         )
                     }
                }
                )}
                </tbody>
                </table>
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

