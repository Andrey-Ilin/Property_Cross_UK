/*@ngInject*/
export default ($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider) => {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/'});
  $httpProvider.defaults.timeout = 5000;        //TODO implement interceptor for catch errors
  
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://api.nestoria.co.uk/**'
  ]);
}
