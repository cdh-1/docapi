const express = require('express');
const mongoose = require('mongoose');
// var isodate = require("isodate");
const cors = require('cors')
const port = process.env.PORT || 3002;
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const mongo = mongoose.connect('mongodb://localhost:27017/Appointment', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors());
const bandRouter = express.Router();
//this is all it takes to get the route setup
app.use('/api', bandRouter);
 
 
const Appt = require('./models/apptModel');
const { startSession } = require('mongoose');
 
 
 








    


    bandRouter.route('/appt')
    .get((req, res)=>{
        

          Appt.find({})
          .then(function(err, result){
             if(err){
               res.send(err)
             } else {
               res.json(result);
             }
          });

    })

 


app.get('/', (req, res)=>{
    res.send("Welcome to my Api!");
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
    
});

module.exports = app



















