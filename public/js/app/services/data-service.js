(function() {
    angular.module('app.services')
        .constant('API_URL', 'http://it-ebooks-api.info/v1/')
        .factory('DataService', dataService);

    dataService.$inject = ['$http', 'API_URL', '$log'];

    function dataService($http, API_URL, $log) {
        var data = {
            'getBook': getBook,
            'search': search
        };

        function makeRequest(route) {
            // http://it-ebooks-api.info/v1/search/backbone/poge/2
            // http://it-ebooks-api.info/v1/book/2424418435
            var requestUrl = API_URL  + route;

            return $http({
                'url': requestUrl,
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'cache': true
            }).then(function(response){
                return response.data;
            }).catch(dataServiceError);
        }

        function getBook(id) {
            return makeRequest('book/' + id);
        }

        function search(searchTerm, page) {
            var url = 'search/' + searchTerm;

            if (page != undefined || page > 1) {
                url += '/page/' + page;
            }

            return makeRequest(url);
        }

        function dataServiceError(errorResponse) {
            $log.error('XHR Failed for ShowService');
            $log.error(errorResponse);
            return errorResponse;
        }

        return data;
    }    
}());