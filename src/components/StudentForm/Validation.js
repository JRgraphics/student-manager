
export const validation =
        {
            errors: 
                {
                    name: {required: (val) => !val.length},
                    birthday: {required: (val) => !val.length},
                    address: {required: (val) => !val.length},
                    zipcode: {required: (val) => !val.length},
                    city: {required: (val) => !val.length},
                    phone: {required: (val) => !val.length},
                    email: {required: (val) => !val.length, isEmail: (val) => !validation.regex.email.test(String(val).toLowerCase()) && !!val.length}
                }
            ,
            errorMessages: 
                {
                    name: {required: 'Please provide a name.'},
                    birthday: {required: 'Please provide a birthday.'},
                    address: {required: 'Please provide an address.'},
                    zipcode: {required: 'Please provide a zipcode.'},
                    city: {required: 'Please provide a city.'},
                    phone: {required: 'Please provide a phonenumber.'},
                    email: {
                        required: 'Please provide an email.',
                        isEmail: 'Please provide a valid email.'
                    }
                }
            ,
            regex: {
                email: /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
            }
        }
