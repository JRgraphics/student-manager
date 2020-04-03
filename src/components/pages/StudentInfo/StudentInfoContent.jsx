import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

function StudentInfoContent({selected_student}) {
    return (
        <div>
            <h2 className="h2">{selected_student.name}(
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
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selected_student: state.student.student_popup_target
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfoContent);
