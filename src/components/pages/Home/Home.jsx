import React, { useEffect } from 'react';
import StudentTable from '../../StudentTable/StudentTable';
import StudentForm from '../../StudentForm/StudentForm';

function Home() {
    return (
        <div>
            <StudentTable />
            <StudentForm />
        </div>
    )
}

export default Home;