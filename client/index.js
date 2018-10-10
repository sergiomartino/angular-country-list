import 'babel-polyfill';
import angular from 'angular';
import ngRoute from 'angular-route';
import routeConfig from './routes/routeConfig';
import routes from './routes/';
import ui from './ui/';
import features from './features/';
import services from './services/';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/app.css';

angular.module('app', [
  ngRoute,
  routes,
  ui,
  features,
  services
]).config(routeConfig);

angular.bootstrap(document.querySelector('#app'), ['app']);