const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')
const StudentRoutes = require('./routes/studentroutes')
const CourseRoutes = require('./routes/courseroutes')

//dot env config
require('dotenv').config()

const app = express()

//MIDDLEWARES
app.use(express.json());
app.use(cors());


app.use('/students' , StudentRoutes)
app.use('/course' , CourseRoutes)

app.get('/', (req, res) => {
  res.send('LMS Backend')
})

const connectDB = async ()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('database connected');
  }catch(error){
    console.log(error);
  }
}

connectDB().then(()=>{
  app.listen(process.env.PORT)
})