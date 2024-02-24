const Course = require('../models/coursemodel');
const mongoose = require('mongoose');


const addCourse = async (req, res) => {
    const { name, duration, enrolledStudents } = req.body;
    const course = await Course.create({ name, duration, enrolledStudents })
    res.json('course created');
}

const getCourse = async (req, res) => {
    const course = await Course.find({})
    res.json(course);
};

const getCourseWithId = async (req, res) => {
    const { id } = req.params
    const course = await Course.findById(id).populate('enrolledStudents');
    if(!course){
        res.send('No course found');
        return
    }
    res.send({message: 'course Found' , data: course})
}

// const getCourseWithId = async (req, res) => {
//     const { id } = req.params
//     try {
//         const course = await Course.findById(id).populate('enrolledStudents').lean();
//         if (!course) {
//             res.status(404).send('No course found');
//             return;
//         }
//         res.status(200).json({ message: 'Course found', data: course });
//     } catch (error) {
//         console.error('Error fetching course:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

const updateCourse = async (req, res) => {
    const { courseId, studentId } = req.query;
    console.log(courseId)
    console.log(studentId)

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        // Check if student is already enrolled
        if (course.enrolledStudents.includes(studentId)) {
            return res.status(400).json({ error: "Student is already enrolled in the course" });
        }

        // Add student to the course
        course.enrolledStudents.push(studentId);
        await course.save();

        res.json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { addCourse, getCourse, updateCourse, getCourseWithId }