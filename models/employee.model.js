const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'


    },
    mobile: {
        type: Number,
        required: 'This field is required.'

    },
    hobbies: {
        type: String,
        required: 'This field is required.'

    }
});

// Custom validation for email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

employeeSchema.path('fullName').validate((name) => {
    fullNameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    return fullNameRegex.test(name);
}, 'Invalid Name.');

employeeSchema.path('mobile').validate((val) => {
    mobileRegex = /^(0|[+91]{3})?[7-9][0-9]{9}$/;
    return mobileRegex.test(val);
}, 'Invalid mobile .');



mongoose.model('Employee', employeeSchema);