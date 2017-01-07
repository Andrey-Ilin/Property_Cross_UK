import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import angular from 'angular';
import ngRoute from 'angular-route';
import sanitize from 'angular-sanitize';
if (TEST) {
    require('angular-mocks');
}

import './sass/style.scss';
import routing from './config';
import search from './modules/search';
import results from './modules/results';
import property from './modules/property';
import faves from './modules/faves';


/*@ngInject*/
angular.module('app', [ngRoute, sanitize, search, results, property, faves])
    .config(routing)
    .run(['$rootScope', '$sce', ($root) => {
        $root.$on('$stateChangeStart', (e, newUrl, oldUrl) => {
            if (newUrl !== oldUrl) {
                $root.loadingView = true;
            }
        });
        $root.$on('$stateChangeSuccess', () => {
            $root.loadingView = false;
        });
        $root.$on('$stateChangeError', () => {
            $root.loadingView = false;
        });
    }]);
