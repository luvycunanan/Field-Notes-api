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

  } catch (err) {
    return res.json({status: 500, message: 'Something went wrong. Please try again'})
  }
}


module.exports = {
  create,
}