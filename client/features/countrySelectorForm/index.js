import angular from 'angular';
import CountrySelectorForm from './CountrySelectorForm';
import CountrySelector from './CountrySelector';
import CountrySelectorFormController from './CountrySelectorFormController';
import SelectedCountries from './SelectedCountries';
import CountrySuggestion from './CountrySuggestion';

export default angular
  .module('app.features.countrySelectorForm', [ 'app.services', 'app.ui' ])
  .directive('countrySelectorForm', CountrySelectorForm)
  .directive('countrySelector', CountrySelector)
  .directive('selectedCountries', SelectedCountries)
  .directive('countrySuggestion', CountrySuggestion)
  .controller('CountrySelectorFormController', CountrySelectorFormController)
  .name;