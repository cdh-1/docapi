const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;



const apptModel = new Schema(
    {
   
    Date:   {type: Date, required: true},
    Time:   {type: Array, required: true},
    Patient_Name : {type: String, required: false},
  
    
    },
    { collection: 'Appointment' }
);
 

module.exports = mongoose.model('Appointment', apptModel)