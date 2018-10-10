export default function CountrySuggestion() {
  return {
    replace: true,
    scope: {
      onConfirm: '&',
      country: '<'
    },
    template: `
    <div class="panel-block country-suggestion" ng-click="onConfirm({ country })">
      <span class="panel-icon">
        <i class="fas fa-globe"></i>
      </span>
      {{ country.name }}
    </div>`
  };
};