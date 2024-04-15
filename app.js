const express = require('express');
const connectDB = require('./database/db');
const forecastRouter = require('./routes/forecast');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
connectDB();

app.use('/forecast', forecastRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));