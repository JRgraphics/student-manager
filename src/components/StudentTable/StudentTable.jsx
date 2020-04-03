import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchStudents, searchStudent, fetchCourses, setAddStudentPopup } from '../../redux';
import './StudentTable.sass';
import StudentTableItem from './StudentTableItem';

function StudentTable({ studentData, fetchStudents, fetchCourses}) {
    useEffect(() => {
        fetchStudents();
        fetchCourses();
    }, []);
    const dispatch = useDispatch();

    const headers = ["Name", "Address", "Email", "Phone", "Birthday"];
    return studentData.loading ? (
        <h2>Loading...</h2>
        
    ) : studentData.error ? (
        <h2>{studentData.error}</h2>

    ) : (
        <div className={"student-table " + 
        (studentData.student_popup_status || studentData.add_student_display ? "overflow-y--hidden" : "")
        }>
            <h2>Students</h2>
            <input type="text" placeholder="Search.." onChange={e => {
                dispatch(searchStudent(e.target.value));
                }} />
            <button onClick={() => dispatch(setAddStudentPopup(true))}>ADD STUDENT</button>
            <table className="table table-dark table-hover p-0 m-0">
                <tbody>
                    <tr className="thead">
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
