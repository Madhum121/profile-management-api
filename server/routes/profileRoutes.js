const express = require("express");
const router = express.Router();

const {
  getProfile,
  updateProfile,
  endorseSkill
} = require("../controllers/profileController");

router.get("/", getProfile);
router.put("/", updateProfile);
router.post("/endorse/:skill", endorseSkill);

module.exports = router;

