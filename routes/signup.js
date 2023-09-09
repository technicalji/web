const express = require ("express");
const router = express.Router();

const {signup, getAllUser} = require("../controllers/signup");
//const getAllUser = require("../controllers/signup");

router.post("/signup",signup);
router.get("/amit",getAllUser);
module.exports = router;