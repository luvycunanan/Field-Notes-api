const bcrypt = require('bcryptjs');
const db = require('../models');

const create = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({status: 400, message: 'All fields required'});
  }

  try {
    const foundUser = await db.User.findOne({ email });
    if (foundUser) return res.json({status: 400, error: 'Account already exist'})
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const userData = {
      username: username,
      email: email,
      password: hash
    }
    const newUser = await db.User.create(userData);
    res.json(newUser);
  } 
  catch (err) {
    return res.json({status: 500, message: 'Something went wrong. Please try again'})
  }
}

const profile = async (req, res) => {
  try {
    const user = await db.User.findById(req.currentUserId);
    return res.json({status: 200, profile: user})
  }
  catch (err) {
    res.json({status: 500, error: 'Something went wrong. Please try again'})
  }
}


module.exports = {
  create,
  profile,
}