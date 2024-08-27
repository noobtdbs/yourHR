// server/models/JobSeeker.js
const mongoose = require('mongoose');

const JobSeekerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  resumeUrl: {
    type: String,
    required: true,  // This should be required instead of resumePath
  },
});

module.exports = mongoose.model('JobSeeker', JobSeekerSchema);
