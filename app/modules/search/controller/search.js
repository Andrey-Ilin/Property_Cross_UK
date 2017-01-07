import '../sass/search.scss';


export default class SearchController {
    constructor($location, SearchService, $rootScope) {
        this._$location = $location;
        this._$root = $rootScope;
        this._search = SearchService;
        this._recentSearchItems = this._search.getRecentSearchItems();
        this.searchTerm = null;
        this.searchError = null;
        this._searchErrors = {
            noResultsError: 'There were no properties found for the given location.',
            noGeolocation: 'Geolocation is not supported by this browser.',
            geolocationDidNotMathed: 'The location given was not recognised.'
        }
    }

    getProperties() {
        this._search.clearSearchresults();
        this._$root.loadingView = true;

        if (this.searchTerm) {
            this._$root.loadingView = true;
        }

        this._search.getProperties(this.searchTerm)
            .then((res) => {
                this._getPropertiesSuccesfully(res);
            }, (err) => {
                this._getErr(err);
            })
    }

    setSearchTerm(term) {
        this.searchTerm = term;
    }

    showFaves() {
        console.log(this._search.getFaves());
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this._search.getPropertiesByCurrentLocation(position.coords.latitude, position.coords.longitude)
                    .then((res) => {
                        if (res.application_response_code === 200 || 202) {
                            this.searchError = this._searchErrors.geolocationDidNotMathed;
                        } else {
                            this._getPropertiesSuccesfully(res);
                        }
                    }, (err) => {
                        this._getErr(err);
                    });
            })
        } else {
            this.searchError = this._searchErrors.noGeolocation;
        }
    }

    _getPropertiesSuccesfully(res) {
        let results = res.data.response.listings;
        if (!results.length) {
            this.searchError = this._searchErrors.noResultsError;
            this._$root.loadingView = false;
            return;
        }
        let totalResults = res.data.response.total_results;
        this._search.concatSearchResults(results);
        this._search.addRecentSearchItem({
            term: this.searchTerm,
            total: totalResults
        });
        this._search.setSearchMatches(totalResults)
        this.searchTerm = null;
        this._$root.loadingView = false;

        this._$location.path('/results');
    }

    _getErr(err) {
        console.log(err);
        this._$root.loadingView = false;
        this._$location.path('/');
    }
}

SearchController.$inject = ['$location', 'SearchService', '$rootScope'];
