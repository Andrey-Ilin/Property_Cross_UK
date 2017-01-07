/*@ngInject*/
export default ($routeProvider) => {
    $routeProvider
        .when('/faves', {
            template: require('../view/faves.html'),
            controller: 'FavesController',
            controllerAs: 'faves'
        })
        .otherwise({ redirectTo: '/' });

}
