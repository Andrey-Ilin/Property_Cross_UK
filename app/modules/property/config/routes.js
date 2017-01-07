/*@ngInject*/
export default ($routeProvider) => {
    $routeProvider
        .when('/property', {
            template: require('../view/property.html'),
            controller: 'PropertyController',
            controllerAs: 'property'
        })
        .otherwise({redirectTo: '/'});

}
