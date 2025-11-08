const formData = require("../models/formModel");
const { validationResult } = require("express-validator");

// Submit form data
const submitForm = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {
      name,
      city,
      email,
      phone,
      destination,
      dateOfTravel,
      people,
      vacationType,
    } = req.body;

    const newFormEntry = new formData({
      name,
      city,
      email,
      phone,
      destination,
      dateOfTravel,
      people,
      vacationType,
    });

    await newFormEntry.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error while submitting form:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting the form." });
  }
};

// Get all form submissions
const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await formData.find().sort({ createdAt: -1 });
    res.json(submissions);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    res.status(500).json({ error: "Error fetching submissions" });
  }
};

module.exports = {
  submitForm,
  getAllSubmissions
};

