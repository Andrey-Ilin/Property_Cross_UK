import angular from 'angular';
import ngRroute from 'angular-route';

import routes from './config/routes';
import SearchResultsController from './controller/searchResults'


export default angular.module('results', [ngRroute])
    .config(routes)
    .controller('SearchResultsController', SearchResultsController)
    .name;
