const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        required: true
    },
    enrolledCourse: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
});


module.exports = mongoose.model('Student' , studentSchema);