const express = require('express');
const {addCourse, getCourse, updateCourse} = require('../controller/coursecontroller');

const router = express.Router();

//addStudent
router.post('/' , addCourse)


//getStudent
router.get('/' , getCourse)

//updateStudent
router.put('/' , updateCourse)


module.exports = router