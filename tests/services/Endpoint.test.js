import services from '../../client/services/index';

describe('Endpoint', () => {

  let $http, Endpoint;
  let httpPromise, httpPromiseResolver, httpPromiseRejector;
  let countries;

  beforeEach(() => {
    angular.mock.module(services, $provide => {
      $provide.value('$http', jasmine.createSpyObj('$http', ['get', 'post']));
    });

    angular.mock.inject($injector => {
      Endpoint = $injector.get('Endpoint');
      $http = $injector.get('$http');

      httpPromise = new Promise((resolve, reject) => {
        httpPromiseResolver = resolve;
        httpPromiseRejector = reject;
      });

      $http.get.and.returnValue(httpPromise);
      countries = [{ name: 'Portugal', isoCode: 'POR' }, { name: 'Italy', isoCode: 'ITA' }];
    });
  });

  describe('When searching for a country', () => {

    it('should do perform a country search', () => {
      Endpoint.getCountry('POR');
      expect($http.get).toHaveBeenCalledWith(`/country?search=POR`);
    });

    it('should provide a list of countries', () => {
      const mockedCountriesResponse = { data: countries };
      Endpoint.getCountry('POR').then(response => {
        expect(response).toBe(mockedCountriesResponse.data);
      });
      httpPromiseResolver(mockedCountriesResponse);
    });

    it('should provide an empty list upon failure', () => {
      Endpoint.getCountry('POR').then(response => {
        expect(response).toEqual([]);
      });
      httpPromiseRejector();
    });
  });

  describe('When saving selected countries', () => {

    it('should attempt saving to the server', () => {
      Endpoint.saveSelectedCountries([]);
      expect($http.post).toHaveBeenCalledWith('/selectedCountries', jasmine.any(Object));
    });

    it('should save a list of country isoCodes', () => {
      Endpoint.saveSelectedCountries(countries);
      expect($http.post).toHaveBeenCalledWith('/selectedCountries', { isoCodes: ['POR','ITA'] });
    });

    it('should provide a success message', () => {
      Endpoint.saveSelectedCountries(countries).then(response => {
        expect(response).toBe('ok');
      });
      httpPromiseResolver({ data: 'ok' });
    });

    it('should fail with a message', () => {
      Endpoint.saveSelectedCountries(countries).then(response => {
        expect(response).toBe('ko');
      });
      httpPromiseRejector('ko');
    });
  });
});