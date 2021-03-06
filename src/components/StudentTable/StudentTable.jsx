import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchStudents, searchStudent, fetchCourses, setAddStudentPopup } from '../../redux';
import './StudentTable.sass';

import StudentTableItem from './StudentTableItem';

function StudentTable({ studentData, fetchStudents, fetchCourses}) {
    useEffect(() => {
        fetchStudents();
        fetchCourses();
        // eslint-disable-next-line
    }, []);
    const dispatch = useDispatch();
    const headers = ["Name", "Address", "Email", "Phone", "Birthday"];

    return studentData.loading ? (
        <h2>Loading...</h2>
        
    ) : studentData.error ? (
        <h2>{studentData.error}</h2>

    ) : (
        <div className={"student-table-main " + 
        (studentData.student_popup_status || studentData.add_student_display ? "overflow-y--hidden" : "")
        }>
            <h2 className="mx-1 my-3">Students</h2>

            <div className="row col-12">
                <input type="text" placeholder="Search.." defaultValue={studentData.search_term} onChange={e => {
                    dispatch(searchStudent(e.target.value));
                    }} />
                <button className="btn btn-primary" onClick={() => dispatch(setAddStudentPopup(true))}>ADD STUDENT</button>
            </div>
            
            <table className="student-table table table-hover p-0 m-0">
                <tbody>
                    <tr className="student-table__header thead-dark">
                        {headers.map(header => <th scope="col">{header}</th> )}
                    </tr>
                    {
                    studentData &&
                    studentData.student &&
                    studentData.student.filter(student => student.name.toLowerCase().includes(studentData.search_term.toLowerCase())).map((value, index) =>
                        <StudentTableItem value={value} index={index} />
                        )
                     }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        studentData: state.student
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStudents: () => dispatch(fetchStudents()),
        fetchCourses: () => dispatch(fetchCourses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentTable);
