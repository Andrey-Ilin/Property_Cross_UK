/*@ngInject*/
class SearchService {
    constructor($http) {
        this._$http = $http;
        this._apiUrl = 'http://api.nestoria.co.uk/api';
        this._pageNumber = 1;
        this._searchResults = [];
        this._recentSearchItems = [];
        this._totalSearchMatches = null;
        this.searchTerm = null;
        this._chosenProperty = {};
    }

    getProperties(searchTerm) {
        this.searchTerm = searchTerm;
        return this._$http({
            method: 'JSONP',
            url: this._apiUrl,
            params: {
                country: 'uk',
                pretty: '1',
                action: 'search_listings',
                encoding: 'json',
                listing_type: 'buy',
                page: this._pageNumber,
                place_name: searchTerm
            }
        })
    }

    getPropertiesByCurrentLocation(latitude, longitude) {
        return this._$http({
            method: 'JSONP',
            url: this._apiUrl,
            params: {
                country: 'uk',
                pretty: '1',
                action: 'search_listings',
                encoding: 'json',
                listing_type: 'buy',
                page: this._pageNumber,
                centre_point: latitude + ',' + longitude
            }
        })
    }

    getPageNumber() {
        return this._pageNumber;
    }

    incrementPageNumber() {
        this._pageNumber = this._pageNumber + 1;
    }

    getSearchResults() {
        return this._searchResults;
    }

    concatSearchResults(newRes) {
        this._searchResults = this._searchResults.concat(newRes)
    }

    clearSearchresults() {
        this._searchResults = [];
        this._pageNumber = 1;
    }

    addRecentSearchItem(item) {
        this._recentSearchItems.push(item);
    }

    getRecentSearchItems() {
        return this._recentSearchItems;
    }

    setSearchMatches(value) {
        this._totalSearchMatches = value;
    }

    getSearchMatches(value) {
        return this._totalSearchMatches;
    }

    getSearchTerm() {
        return this.searchTerm;
    }

    setChosenProperty(property) {
        this._chosenProperty = property;
    }

    getChosenProperty() {
        return this._chosenProperty;
    }

    getFaves() {
        return JSON.parse(localStorage.getItem('propertyCrossFaves'));
    }

    addToFavorite(property) {
        let storage = localStorage.getItem('propertyCrossFaves');
        if (storage) {
            storage = JSON.parse(storage);
            storage.push(property);
            localStorage.setItem('propertyCrossFaves', JSON.stringify(storage));
        } else {
            storage = [];
            storage.push(property);
            localStorage.setItem('propertyCrossFaves', JSON.stringify(storage));
        }
    }
}

export default SearchService;

