export default function CountrySelector() {
  return {
    replace: true,
    scope: {
      country: '=',
      suggestions: '<',
      onRequest: '&',
      onConfirm: '&'
    },
    template: `
      <div class="panel">
        <h1 class="panel-heading">Country</h1>
        <div class="panel-block">
          <div class="control has-icons-left">
            <input type="text" class="input is-large" ng-model="country" ng-change="onRequest({ country })" ng-focus="onRequest({ country })" />
            <span class="icon is-small is-left">
             <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
        <country-suggestion country="country" on-confirm="onConfirm({ country })" ng-repeat="country in suggestions" />
    </div>`
  };
};