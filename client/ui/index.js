import angular from 'angular';
import Message from './message/Message';

export default angular
  .module('app.ui', [])
  .directive('message', Message)
  .name;