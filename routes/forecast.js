const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const city = req.query.city;
        if (!city) {
            return res.render('forecast', { forecastData: null, error: 'Please enter a city name' });
        }
        //Default is K
        //&units=metric is C
        //&units=imperial is F
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8ee62bb90f97ff56f5f174c8926c5aa1`);
        const forecastData = response.data;
        res.render('forecast', { forecastData, error: null });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching forecast');
    }
});

module.exports = router;