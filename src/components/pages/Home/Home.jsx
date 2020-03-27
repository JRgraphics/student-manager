import React, { useEffect } from 'react';
import StudentTable from '../../StudentTable/StudentTable';
import StudentForm from '../../StudentForm/StudentForm';
import StudentPopup from '../StudentPopup/StudentPopup';

function Home() {
    return (
        <div>
            <StudentPopup />
            <StudentTable />
            <StudentForm />
        </div>
    )
}

export default Home;