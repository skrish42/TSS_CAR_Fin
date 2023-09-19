const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employeeeee = mongoose.model('Employeeeee');

router.get('/', (req, res) => {
    res.render("employeeeee/addOrEdit4", {
        viewTitle: "EV Lab Booking"
    });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var employeeeee = new Employeeeee();
    employeeeee.fullName = req.body.fullName;
    employeeeee.email = req.body.email;
    employeeeee.mobile = req.body.mobile;
    employeeeee.department = req.body.department;
    employeeeee.equipment = req.body.equipment;
    employeeeee.timeslots = req.body.timeslots;
    employeeeee.timeslote = req.body.timeslote;

    employeeeee.save((err, doc) => {
        if (!err)
            res.redirect('employeeeee/list4');
            else{
                if (err.name == 'ValidationError') {
                    handleValidationError(err, req.body);
                    res.render("employeeeee/addOrEdit4", {
                        viewTitle: "Product Build Lab Booking",
                        employeeeee: req.body
                    });
                }
                else
                console.log('Error during record insertion : ' + err);
        }
    });
}

router.get('/list4', (req, res) => {
    Employeeeee.find((err, docs) => {
        if (!err) {
            res.render("employeeeee/list4", {
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