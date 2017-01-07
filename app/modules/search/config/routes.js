/*@ngInject*/
export default ($routeProvider) => {
    $routeProvider
        .when('/', {
            template: require('../view/search.html'),
            controller: 'SearchController',
            controllerAs: 'search'
        })
        .otherwise({redirectTo: '/'});
}
