const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employeeeeee = mongoose.model('Employeeeeee');

router.get('/', (req, res) => {
    res.render("employeeeeee/addOrEdit5", {
        viewTitle: "General Venues Booking"
    });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var employeeeeee = new Employeeeeee();
    employeeeeee.fullName = req.body.fullName;
    employeeeeee.email = req.body.email;
    employeeeeee.mobile = req.body.mobile;
    employeeeeee.department = req.body.department;
    employeeeeee.equipment = req.body.equipment;
    employeeeeee.timeslots = req.body.timeslots;
    employeeeeee.timeslote = req.body.timeslote;

    employeeeeee.save((err, doc) => {
        if (!err)
            res.redirect('employeeeeee/list5');
            else{
                if (err.name == 'ValidationError') {
                    handleValidationError(err, req.body);
                    res.render("employeeeeee/addOrEdit5", {
                        viewTitle: "General Venues Booking",
                        employeeeeee: req.body
                    });
                }
                else
                console.log('Error during record insertion : ' + err);
        }
    });
}

router.get('/list5', (req, res) => {
    Employeeeeee.find((err, docs) => {
        if (!err) {
            res.render("employeeeeee/list5", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    }).lean();
});

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

module.exports = router;