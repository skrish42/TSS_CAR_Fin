const mongoose = require('mongoose');

var employaSchema = new mongoose.Schema({
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
    idea: {
        type: String,
        required: 'This field is required.'
    },
    pid:{
        type: String
    },
    pidea:{
        type: String,
        required: 'This field is required.'
    },
    pexp: {
        type: String,
        required: 'This field is required.'
    },
    regs: {
        type: String,
        required: 'This field is required.'
    }
});

// Custom validation for email
employaSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Employa', employaSchema);