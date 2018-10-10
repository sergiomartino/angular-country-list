const CountriesService = require('./CountriesService');

const CountriesAPIService = {};

CountriesAPIService.country = async function (req, res) {
  const query = req.query.search;
  let countries;

  try {
    countries = await CountriesService.getCountries(query);
  } catch(error) {
    countries = null;
  }

  if (!countries) {
    return res.status(500).json({ error: 'Unable to connect to CountriesService'});
  }

  if (countries.length > 0) {
    return res.status(200).json(countries);
  } else if (countries.length === 0) {
    return res.status(404).json(countries);
  }
};

CountriesAPIService.selectedCountries = function (req, res) {
  return res.status(200).json({});
};

module.exports = CountriesAPIService;