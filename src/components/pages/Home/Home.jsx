import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../../../redux';

function Home({ studentData, fetchStudents}) {
    useEffect(() => {
        fetchStudents()
    }, [])
    return studentData.loading ? (
        <h2>Loading...</h2>
    ) : studentData.error ? (
        <h2>{studentData.error}</h2>
    ) : (
        <div className="container">
            <h2>Students</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Birthday</th>
                    </tr>
                    {
                    studentData &&
                    studentData.student &&
                    studentData.student.map((value, index) => 
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.address}</td>
                            <td>{value.email}</td>
                            <td>{value.phone}</td>
                            <td>{value.birthday}</td>
                        </tr>
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
        fetchStudents: () => dispatch(fetchStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);