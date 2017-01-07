import '../sass/faves.scss';

export default class FavesController {
    constructor($location, SearchService, $rootScope) {
        this._$location = $location;
        this._$root = $rootScope;
        this._search = SearchService;
        this._favourites = this._search.getFaves();
    }

    openProperty(property) {
        console.log(property)
        this._search.setChosenProperty(property);
    }
}

FavesController.$inject = ['$location', 'SearchService', '$rootScope'];
