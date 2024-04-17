const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  console.log(username + " " + password)
  if (!username || !password) {
    return res.render('signin', { error: 'Please provide both username and password' });
  }
  try {
    // Find the user with the provided username in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.render('signin', { error: 'Invalid username or password' });
    }
    // Compare the provided password with the password stored in the database
    if (user.password !== password) {
      return res.render('signin', { error: 'Invalid username or password' });
    }
    // If authentication is successful, redirect to the forecast page
    res.redirect('/forecast');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;