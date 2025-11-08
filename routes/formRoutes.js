const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");
const { body } = require("express-validator");

router.post(
  "/submitData",
  [
    body("name").notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("Invalid email format."),
    body("phone").isMobilePhone().withMessage("Invalid phone number."),
    body("destination").notEmpty().withMessage("Destination is required."),
    body("dateOfTravel").isDate().withMessage("Invalid date."),
    body("people")
      .isInt({ gt: 0 })
      .withMessage("Number of people must be greater than 0."),
  ],
  formController.submitForm
);

module.exports = router;

