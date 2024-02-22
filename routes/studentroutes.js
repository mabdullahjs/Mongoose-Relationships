const express = require('express');
const {addStudent, getStudent, updateStudent} = require('../controller/studentcontroller');

const router = express.Router();

//addStudent
router.post('/' , addStudent)


//getStudent
router.get('/' , getStudent)

router.put('/' , updateStudent);


module.exports = router