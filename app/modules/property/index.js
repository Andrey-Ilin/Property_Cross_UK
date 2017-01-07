import angular from 'angular';
import ngRroute from 'angular-route';

import routes from './config/routes';
import PropertyController from './controller/property'

export default angular.module('property', [ngRroute])
    .config(routes)
    .controller('PropertyController', PropertyController)
    .name;
