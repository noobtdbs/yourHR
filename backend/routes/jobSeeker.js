// server/routes/jobSeeker.js
const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/CloudinaryConfig');
const JobSeeker = require('../models/JobSeeker');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/signup', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const resumePath = req.file.path;

    // Upload resume to Cloudinary
    const result = await cloudinary.uploader.upload(resumePath, {
      folder: 'resumes',
      resource_type: 'raw',
    });

    // Delete the local file after upload
    fs.unlinkSync(resumePath);

    // Save the job seeker's data in the database with the Cloudinary URL
    const jobSeeker = new JobSeeker({
      name,
      email,
      phone,
      resumeUrl: result.secure_url,  // Use resumeUrl instead of resumePath
    });

    await jobSeeker.save();

    res.status(200).json({ message: 'Signup successful', resumeUrl: result.secure_url });
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
