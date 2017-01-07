import '../sass/property.scss';

export default class PropertyController {
    constructor($location, SearchService, $rootScope) {
        this._$location = $location;
        this._$root = $rootScope;
        this._search = SearchService;
        this._property = this._search.getChosenProperty();
        this._notInFavorite = this.checkIsFavourite();
    }

    addToFavorite(property) {
        this._search.addToFavorite(property);
        this._notInFavorite = true;
    }

    checkIsFavourite() {
        if (angular.isArray(this._search.getFaves())) {
            return this._search.getFaves().some((property) => {
                return this._property.lister_url === property.lister_url;
            })
        } else {
            return false;
        }

    }
}

PropertyController.$inject = ['$location', 'SearchService', '$rootScope'];
