export default function CountrySelectorFormController($scope, $rootScope, Endpoint) {

  $scope.formModel = {
    userInput: null,
    message: null,
    selectedCountries: [],
    countrySuggestions: []
  };

  $scope.onCountryRequest = async function(country) {
    clearSuggestions();
    clearMessage();

    if (isCountryRequestValid(country)) {
      const results = await Endpoint.getCountry(country);
      $rootScope.$applyAsync(() => $scope.formModel.countrySuggestions = results);
    }
  };

  $scope.onCountryRemove = function(country) {
    const index = $scope.formModel.selectedCountries.indexOf(country);
    $scope.formModel.selectedCountries.splice(index, 1);
  };

  $scope.onCountryConfirm = function(country) {
    clearSuggestions();

    if (!isCountryAlreadySelected(country)) {
      $scope.formModel.selectedCountries.push(country);
    }
  };

  $scope.sendForm = async function() {
    clearSuggestions();

    if (!$scope.formModel.selectedCountries.length) {
      return setMessage('warning', 'Please select at least 1 country.');
    }

    Endpoint.saveSelectedCountries($scope.formModel.selectedCountries)
      .then(() => setMessage('success', 'Countries saved successfully.'))
      .catch(() => setMessage('danger', 'Unable to save selected countries. Please try again.'))
      .finally(() => {
        clearSelectedCountries();
        clearUserInput();
      });
  };

  function clearSuggestions() {
    $scope.formModel.countrySuggestions.length = 0;
  }

  function clearMessage() {
    $scope.formModel.message = null;
  }

  function clearUserInput() {
    $scope.formModel.userInput = null;
  }

  function clearSelectedCountries() {
    $scope.formModel.selectedCountries.length = 0;
  }

  function isCountryRequestValid(country) {
    return country && country.length >= 2;
  }

  function isCountryAlreadySelected(country) {
    return $scope.formModel.selectedCountries.some(selectedCountry => selectedCountry.isoCode === country.isoCode);
  }

  function setMessage(type, text) {
    $rootScope.$evalAsync(() => $scope.formModel.message = { type, text });
  }
};