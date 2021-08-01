const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err) {console.log('MongoDB connection successful.');}
    else {console.log('Error in Db connection ' + err);} 
    });

require('./employee.model');