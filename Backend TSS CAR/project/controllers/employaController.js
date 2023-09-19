const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employa = mongoose.model('Employa');

router.get('/', (req, res) => {
    res.render("employa/addOrEdit6", {
        viewTitle: "TSS CAR Project Hub"
    });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var employa = new Employa();
    employa.fullName = req.body.fullName;
    employa.email = req.body.email;
    employa.mobile = req.body.mobile;
    employa.department = req.body.department;
    employa.idea = req.body.idea;
    employa.pid = req.body.pid;
    employa.pidea = req.body.pidea;
    employa.pexp = req.body.pexp;
    employa.regs = req.body.regs;

    employa.save((err, doc) => {
        if (!err)
            res.redirect('employa/list6');
            else{
                if (err.name == 'ValidationError') {
                    handleValidationError(err, req.body);
                    res.render("employa/addOrEdit6", {
                        viewTitle: "Welcome To TSS CAR Project Hub",
                        employa: req.body
                    });
                }
                else
                console.log('Error during record insertion : ' + err);
        }
    });
}

router.get('/list6', (req, res) => {
    Employa.find((err, docs) => {
        if (!err) {
            res.render("employa/list6", {
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