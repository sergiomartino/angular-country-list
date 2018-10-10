export default function SelectedCountries() {
  return {
    replace: true,
    scope: {
      countries: '<',
      onCountryRemove: '&'
    },
    template: `
    <div>
      <p class="title is-5">Selected:</p>
      <p class="no-countries" ng-if="!countries.length">None.</p>
      <ul class="field is-grouped">
        <li class="control country" ng-repeat="country in countries">
          <div class="tags has-addons">
            <span class="tag is-info">{{ country.name }}</span>
            <a class="tag is-delete" ng-click="onCountryRemove({ country })"></a>
          </div>
        </li>
      </ul>
    </div>`
  };
};