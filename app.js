const express = require('express');
const connectDB = require('./database/db');
const homeRouter = require('./routes/home');
const forecastRouter = require('./routes/forecast');
const authRouter = require('./routes/auth');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Set the 'views' directory for Pug templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve static files from the 'styles' directory
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Parse JSON bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Define routes
app.use('/', homeRouter);
app.use('/forecast', forecastRouter);
app.use('/auth', authRouter);

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));