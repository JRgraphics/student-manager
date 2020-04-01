import React from 'react';
import StudentTable from '../../StudentTable/StudentTable';
import StudentForm from '../../StudentForm/StudentForm';
import StudentInfo from '../StudentInfo/StudentInfo';

function Home() {
    return (
        <div>
            <StudentInfo />
            <StudentTable />
            <StudentForm />
        </div>
    )
}

export default Home;