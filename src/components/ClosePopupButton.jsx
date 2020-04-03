import React from 'react'
import { useDispatch } from 'react-redux';
import { setStudentPopup } from '../redux';
import delete_icon from '../assets/images/close.png';

function ClosePopupButton(props) {
    const dispatch = useDispatch();
    return (
        <button className="btn student-popup__close_button" onClick={() => {
            props.popup_ref.current.classList.remove('student-popup--active');
            props.popup_ref.current.classList.add('student-popup--deactive');
            setTimeout(() => {
                dispatch(setStudentPopup(props.caller, false, {}))
            }, 500);
            }}>
            <img className="close_button__icon" src={delete_icon} alt={"close"} />
        </button>
    )
}

export default ClosePopupButton
