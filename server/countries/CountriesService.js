const csvtojson = require('csvtojson');
const path = require('path');

const CountriesService = {};
const COUNTRIES_FILE = path.join(__dirname, 'isoCodes.csv');
let cachedCountries = null;

CountriesService.getCountries = async function (country) {
  if (cachedCountries) {
    return Promise.resolve(search(cachedCountries, country));
  }

  cachedCountries = await csvtojson().fromFile(COUNTRIES_FILE).then(transform);
  return search(cachedCountries, country);
};

function transform(countries) {
  return countries.map(country => {
    return { name: country.name, isoCode: country['alpha-3'] };
  });
}

function search(list, query) {
  return list.filter(({ name }) => {
    query = query.toLowerCase();
    return name.toLowerCase().slice(0, query.length) === query;
  });
}

module.exports = CountriesService;