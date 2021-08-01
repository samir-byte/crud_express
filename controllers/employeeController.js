const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    Employee.find((err, employees) => {
        if (!err) {
            res.render('home',{
                employees: employees
            } );
        }
        else {
            console.log('Error in retriving the employees' + err);
        }
    }).lean();
});

router.post('/', (req, res) => {    
    insertRecord(req, res);
});
function insertRecord(req, res) {
    var employee = new Employee();
    employee.fullName = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err) => {
        if (err) {
            res.send(err);
        }
        res.redirect('/employee');   
    });
}
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (!err) {
            res.render('update', {
                employee: employee
                });
                }
            }).lean()});
router.post('/update/:id', (req, res) => {
    // console.log(req.params.id);
    Employee.findOneAndUpdate({_id: req.body._id}, {fullName :req.body.fullname,email:req.body.email,
        mobile:req.body.mobile,city:req.body.city}, {new: true, useFindAndModify: false },(err, employee)=>{
        if (err) {
            res.send(err);
        }
        else {
            res.redirect('/employee');
        }
}).lean()
});
    
router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, employee) => {
        if (!err) {
            res.redirect('/employee');
            }   
        else {
            console.log('Error in deleting the employee' + err);
            }
        });
    }); 
module.exports = router