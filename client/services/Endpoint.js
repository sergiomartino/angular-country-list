export default function Endpoint($http) {
  return {
    getCountry(query) {
      return $http.get(`/country?search=${query}`)
        .then(results => results.data)
        .catch(() => []);
    },

    saveSelectedCountries(countries) {
      return new Promise((resolve, reject) => {
        $http.post('/selectedCountries', { isoCodes: countries.map(country => country.isoCode) })
          .then(result => resolve(result.data))
          .catch(reject);
      });
    }
  };
};