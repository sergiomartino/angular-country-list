import angular from 'angular';
import Endpoint from './Endpoint';

export default angular
  .module('app.services', [])
  .service('Endpoint', Endpoint)
  .name;