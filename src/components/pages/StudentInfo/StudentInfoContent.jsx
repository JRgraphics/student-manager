import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import profile_icon from '../../../assets/images/profile.png';
import address_icon from '../../../assets/images/address.png';
import phone_icon from '../../../assets/images/phone.png';
import email_icon from '../../../assets/images/email.png';

function StudentInfoContent({selected_student}) {
    return (
        <div className="student-info-content text-center col-12">
            <img className="col-4 col-sm-3 col-md-2 student-info-content__icon" src={profile_icon} alt={"profile"} />
            <h2 className="h2">{selected_student.name}</h2>
            <h6 className="font-italic text-secondary">-<Moment format="D.M.YYYY" date={selected_student.birthday}/>-</h6>
    
            <div className="content-separator-line col-6"></div>
            <table className="table table-borderless col-10 col-md-4 mx-auto text-left">
                <tbody>
                    <tr>
                        <td className="font-weight-bold">Address</td>
                        <td className="font-weight-light text-secondary text-right">
                        {" " + selected_student.address},
                        {" " + selected_student.zipcode},
                        {" " + selected_student.city.toUpperCase()}
                        </td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Phone</td>
                        <td className="font-weight-light text-secondary text-right">{selected_student.phone}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Email</td>
                        <td className="font-weight-light text-secondary text-right">{selected_student.email}</td>
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

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfoContent);
