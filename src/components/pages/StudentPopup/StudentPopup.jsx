import React from 'react';
import { closeStudentPopup } from '../../../redux';
import { connect, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import './StudentPopup.sass';

function StudentPopup({ studentData, courseData }) {
    const dispatch = useDispatch();
    return studentData && courseData && studentData.student_popup_status && studentData.student_popup_target !== {} ? (
        <div className="student-popup" onClick={() => dispatch(closeStudentPopup())}>
            <div className="student-popup__background"></div>
            <div className="student-popup__container">
                <h2>{studentData.student_popup_target.name}(<Moment format="D.M.YYYY" date={studentData.student_popup_target.birthday}/>)</h2>
                <p>Address:
                    {" " + studentData.student_popup_target.address},
                    {" " + studentData.student_popup_target.zipcode},
                    {" " + studentData.student_popup_target.city.toUpperCase()}
                </p>
                <p>Phone: {studentData.student_popup_target.phone}</p>
                <p>Email: {studentData.student_popup_target.email}</p>
                    
                <h2>Courses</h2>
                {studentData.student_popup_target.courses.map((value) => {
                    console.log(value)
                    for (var i=0; i < courseData.course.length; ++i) {
                        if (value === courseData.course[i].id) {
                            return (
                                <div>
                                    {courseData.course[i].name + " "}
                                    (
                                    <Moment format="D.M.YYYY" date={courseData.course[i].startdate}/> -  
                                    <Moment format="D.M.YYYY" date={courseData.course[i].enddate}/>
                                    )
                                </div>
                            ) 
                        }
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
        courseData: state.course
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentPopup);

