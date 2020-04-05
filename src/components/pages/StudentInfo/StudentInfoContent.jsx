import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import student_profile_pic from '../../../assets/images/student_1.png';
import StudentInfoTableItem from './StudentInfoTableItem';

function StudentInfoContent({selected_student}) {
    return (
        <div className="student-info-content text-center">
            
            <div className="student-info-content__top-container pb-2">
                <div className="student-info-content__background"></div>
                <img className="student-info-content__icon col-4 col-sm-3 col-md-2 mt-4 p-0" src={student_profile_pic} alt={"profile"} />
                <h2>{selected_student.name}</h2>
                <h6 className="font-italic text-secondary">-<Moment format="D.M.YYYY" date={selected_student.birthday}/>-</h6>
            </div>

            <table className="student-info-table table mx-auto">
                <tbody>
                    <tr className="student-info-table__item-row row">
                        <StudentInfoTableItem label={"Address"}
                        data={" " + selected_student.address +
                        ", " + selected_student.zipcode +
                        ", " + selected_student.city.toUpperCase()} />
                        <StudentInfoTableItem label={"Phone"} data={selected_student.phone} />
                        <StudentInfoTableItem label={"Email"} data={selected_student.email} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selected_student: state.student.student_popup_target
    }
}

export default connect(mapStateToProps)(StudentInfoContent);
