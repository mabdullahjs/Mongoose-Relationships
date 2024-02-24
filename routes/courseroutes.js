const express = require('express');
const {addCourse, getCourse, updateCourse , getCourseWithId} = require('../controller/coursecontroller');

const router = express.Router();

//addStudent
router.post('/' , addCourse)

//getStudent
router.get('/' , getCourse)

//getStudent
router.get('/:id' , getCourseWithId)

//updateStudent
router.put('/' , updateCourse)


module.exports = router