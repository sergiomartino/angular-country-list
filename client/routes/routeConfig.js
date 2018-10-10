import routeList from './routeList';

export default function routes($routeProvider, $locationProvider) {

  routeList.forEach((path, target) => {
    $routeProvider.when(target, path)
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
};