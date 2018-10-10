export default function CountrySelectorForm() {
  return {
    replace: true,
    controller: 'CountrySelectorFormController',
    template: `
      <div>
        <country-selector 
          country="formModel.userInput"
          suggestions="formModel.countrySuggestions" 
          on-request="onCountryRequest(country)" 
          on-confirm="onCountryConfirm(country)" />
          
        <selected-countries 
          countries="formModel.selectedCountries" 
          on-country-remove="onCountryRemove(country)" />        
          
        <button class="button is-primary send-form" ng-click="sendForm()">Submit</button>        
        <message type="formModel.message.type" text="formModel.message.text" class="form-message"></message>
      </div>
    `
  };
};