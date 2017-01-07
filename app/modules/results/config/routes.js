/*@ngInject*/
export default ($routeProvider) => {
    $routeProvider
        .when('/results', {
            template: require('../view/results.html'),
            controller: 'SearchResultsController',
            controllerAs: 'searchResults'
        })
        .otherwise({redirectTo: '/'});

}
