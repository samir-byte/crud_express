const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: "This field is required"
    },  
    email: {
      type: String
    },
    mobile: {
      type: String
    },
    city: {
      type: String
    }    
    });



  //   employeeSchema.path('email').validate(function (email) {
  //     var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  //     return emailRegex.test(email.text); // Assuming email has a text attribute
  //  }, 'The e-mail field cannot be empty.');
   
mongoose.model('Employee', employeeSchema);