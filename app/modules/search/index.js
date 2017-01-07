import angular from 'angular';
import ngRroute from 'angular-route';

import routes from './config/routes';
import Navbar from './directive/navbar';
import Footer from './directive/footer';
import SearchController from './controller/search';
import SearchService from './service/searchService'

export default angular.module('search', [ngRroute])
    .config(routes)
    .service('SearchService', SearchService)
    .controller('SearchController', SearchController)
    .directive('ngNavbar', () => new Navbar())
    .directive('ngFooter', () => new Footer())
    .name;
