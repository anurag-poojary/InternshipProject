const express = require("express");
const router = express.Router();

const Studentcontroller = require("../Controller/Studentcontroller");

router.post("/register", Studentcontroller.createStudent);
router.post("/login", Studentcontroller.loginStudent)

module.exports = router;