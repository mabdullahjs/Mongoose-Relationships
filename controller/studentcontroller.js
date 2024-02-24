const Student = require('../models/studentmodel');
const Course = require('../models/coursemodel');
const mongoose = require('mongoose');


const addStudent = async (req, res) => {
  const { name, email, age, enrolledCourse } = req.body;
  try {
    const student = await Student.create({ name, email, age, enrolledCourse })
    res.json('student created');
  } catch (error) {
    res.send('error occured')
  }
}

const getStudent = async (req, res) => {
  const students = await Student.find({})
  res.json(students);
};

const getStudentById = async (req, res) => {
  const { id } = req.params
  console.log(id)
  const student = await Student.findById(id).populate('enrolledCourse');
  if (!student) {
    res.send('No Student Found')
    return
  }
  res.send({ message: 'Student Found', data: student })
}

const updateStudent = async (req, res) => {
  const { studentId, courseId } = req.query;

  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Update the enrolledCourse field of the student
    student.enrolledCourse = courseId;
    await student.save();

    res.json({ message: "Student enrolled in course successfully", student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No such Course" });
  }

  const Courses = await Course.findOneAndDelete({ _id: id });

  if (!Courses) {
    return res.json({ error: "No such Course" });
  }

  res.json(Courses);
};

module.exports = { addStudent, getStudent, updateStudent, getStudentById }