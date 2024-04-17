const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.render('signin', { error: 'Please provide both username and password' });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.render('signin', { error: 'Invalid username or password' });
    }
    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      return res.render('signin', { error: 'Invalid username or password' });
    }

    res.redirect('/forecast');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
