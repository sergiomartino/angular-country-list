import features from '../../../client/features/countrySelectorForm/index';
import ui from '../../../client/ui/index';

describe('SelectedCountries', () => {

  let $rootScope, $compile;
  let element;

  function createDom(scope) {
    element = angular.element(`<selected-countries
      countries="countries" 
      on-country-remove="onCountryRemove" />`);
    element = $compile(element)(scope);
    scope.$digest();
  }

  beforeEach(() => {
    angular.mock.module(features, ui);
    angular.mock.inject(($injector) => {
      $rootScope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
    });
  });

  it('should provide feedback when no countries are selected', () => {
    const scope = $rootScope.$new();
    scope.countries = [];
    createDom(scope);

    expect(element[0].querySelector('.no-countries')).toBeTruthy();
  });

  it('should list selected countries', () => {
    const scope = $rootScope.$new();
    scope.countries = ['Germany', 'Switzerland', 'Italy'];
    createDom(scope);

    expect(element[0].querySelectorAll('.country').length).toBe(3);
  });
});
