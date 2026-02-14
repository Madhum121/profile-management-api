const Profile = require("../models/profile");


const getProfile = async (req, res) => {
  console.log("GET PROFILE HIT");


  let profile = await Profile.findOne();

  if (!profile) {
    profile = await Profile.create({
      name: "Madhu",
      bio: "Builder Profile",
      image: "https://via.placeholder.com/150",
      skills: [{ title: "React" }, { title: "Node" }],
      socialLinks: {}
    });
  }

  res.json(profile);
};

const updateProfile = async (req, res) => {
  const updated = await Profile.findOneAndUpdate({}, req.body, {
    new: true
  });

  res.json(updated);
};

const endorseSkill = async (req, res) => {
  const profile = await Profile.findOne();

  const skill = profile.skills.find(
    (s) => s.title === req.params.skill
  );

  if (skill) {
    skill.endorsements = (skill.endorsements || 0) + 1;
    await profile.save();
  }

  res.json(profile);
};

module.exports = {
  getProfile,
  updateProfile,
  endorseSkill
};
