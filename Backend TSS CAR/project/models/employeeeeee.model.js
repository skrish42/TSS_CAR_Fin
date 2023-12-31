const mongoose = require('mongoose');

var employeeeeeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String
    },
    department: {
        type: String,
        required: 'This field is required.'
    },
    equipment: {
        type: String,
        required: 'This field is required.'
    },
    timeslots:{
        type: Date,
        required: 'This field is required.'
    },
    timeslote:{
        type: Date,
        required: 'This field is required.'
    }

});

// Custom validation for email
employeeeeeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Employeeeeee', employeeeeeeSchema);