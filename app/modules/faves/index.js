import angular from 'angular';
import ngRroute from 'angular-route';

import routes from './config/routes';
import FavesController from './controller/faves'


export default angular.module('faves', [ngRroute])
    .config(routes)
    .controller('FavesController', FavesController)
    .name;
