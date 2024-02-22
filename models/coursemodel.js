const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    duration:{
        type: Number,
        required: true,
    },
    enrolledStudents: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }]
});


module.exports = mongoose.model('Course' , courseSchema);