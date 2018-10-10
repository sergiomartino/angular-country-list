export default function Message() {
  return {
    scope: {
      type: '<',
      text: '<'
    },
    template: `
    <div ng-if="text" class="message" ng-class="'is-' + type">
      <div class="message-body">
        {{ text }} 
      </div>
    </div>`
  };
};