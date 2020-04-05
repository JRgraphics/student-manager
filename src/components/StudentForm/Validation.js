import store from '../../redux/store';

const checkIfUserExists = (val) => {
    const current_students = store.getState().student.student;
    for (let i=0; i < current_students.length; ++i) {
        console.log(current_students[i].name + "  VS  " + val);
        if ( current_students[i].name.toLowerCase() === val.toLowerCase() ) {
            return true
        }
    }
    return false;
}

export const validation =
        {
            errors: 
                {
                    name: {required: (val) => !val.length, duplicate: (val) => (!!val.length && checkIfUserExists(val) === true)},
                    birthday: {required: (val) => !val.length, isDate: (val) => !validation.regex.date.test(String(val).toLowerCase()) && !!val.length},
                    address: {required: (val) => !val.length},
                    zipcode: {required: (val) => !val.length, isZipcode: (val) => !validation.regex.zipcode.test(String(val).toLowerCase()) && !!val.length},
                    city: {required: (val) => !val.length},
                    phone: {required: (val) => !val.length, isPhone: (val) => !validation.regex.phone.test(String(val).toLowerCase()) && !!val.length},
                    email: {required: (val) => !val.length, isEmail: (val) => !validation.regex.email.test(String(val).toLowerCase()) && !!val.length}
                }
            ,
            errorMessages: 
                {
                    name: {
                        required: 'Please provide your name.',
                        duplicate: 'Name already exists in the system'
                    },
                    birthday: {
                        required: 'Please provide your birthday.',
                        isDate: 'Please provide your birthday in a form: year-month-date'
                    },
                    address: {required: 'Please provide an address.'},
                    zipcode: {
                        required: 'Please provide your current zipcode.',
                        isZipcode: 'Please provide a valid zipcode.'
                    },
                    city: {required: 'Please provide a city.'},
                    phone: {
                        required: 'Please provide your phonenumber.',
                        isPhone: 'Please provide a valid phonenumber.'
                    },
                    email: {
                        required: 'Please provide your email.',
                        isEmail: 'Please provide a valid email.'
                    }
                }
            ,
            regex: {
                //eslint-disable-next-line
                email: /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i,
                phone: /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/i,
                date: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/i,
                zipcode: /^([0-9][0-9][0-9][0-9][0-9])$/i
            }
        }
