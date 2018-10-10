const express = require('express');
const app = express();
const CountriesAPIService = require('./countries/CountriesAPIService');

app.use(express.static('client'));

app.get('/country', CountriesAPIService.country);
app.post('/selectedCountries', CountriesAPIService.selectedCountries);

app.listen(8100, () => console.log('Server Listening...'));