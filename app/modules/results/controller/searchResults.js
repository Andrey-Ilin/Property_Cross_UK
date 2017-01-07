import '../sass/results.scss';

export default class SearchResultsController {
    constructor($location, SearchService, $rootScope) {
        this._$location = $location;
        this._$root = $rootScope;
        this._search = SearchService;
        this._searchResults = this._search.getSearchResults();

        if (!this._searchResults.length) {
            this._$location.path('/');
        }

        this._totalResults = this._search.getSearchMatches();
        this.isLoaded = true;
    }

    clearSearchresults() {
        this._search.clearSearchresults();
    }

    getSearchTerm() {
        return this._search.getSearchTerm();
    }

    loadMore() {
        this.isLoaded = false;
        this._search.incrementPageNumber();
        this._search.getProperties(this.getSearchTerm())
            .then((res) => {
                this.isLoaded = true;
                let results = res.data.response.listings;
                this._search.concatSearchResults(results);
                this._searchResults = this._search.getSearchResults();
                this._totalResults = this._search.getSearchMatches();
            })
    }

    openProperty(property) {
        this._search.setChosenProperty(property);
    }

}

SearchResultsController.$inject = ['$location', 'SearchService', '$rootScope'];
