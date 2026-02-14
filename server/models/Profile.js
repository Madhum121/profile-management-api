const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  title: String,
  endorsements: {
    type: Number,
    default: 0
  }
});

const profileSchema = new mongoose.Schema({
  name: String,
  bio: String,
  image: String,
  skills: [skillSchema],
  socialLinks: Object
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
