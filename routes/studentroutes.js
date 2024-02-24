const express = require('express');
const {addStudent, getStudent, updateStudent, getStudentById} = require('../controller/studentcontroller');

const router = express.Router();

//addStudent
router.post('/' , addStudent)


//getStudent
router.get('/' , getStudent)

//get single student
router.get('/:id' , getStudentById)

router.put('/' , updateStudent);


module.exports = router