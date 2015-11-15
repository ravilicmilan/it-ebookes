(function() {
    angular.module('app.services').factory('authHttpResponseInterceptor', authHttpResponseInterceptor);

    authHttpResponseInterceptor.$inject = ['$q'];

    function authHttpResponseInterceptor($q) {
        var service = {
            request: request,
            response: response,
            responseError: responseError
        };

        function request(config) {
            angular.element('#spinner').show();
            return config;
        }

        function response(response) {
            angular.element('#spinner').fadeOut(500);
            return response || $q.when(response);
        }

        function responseError(reason) {
            angular.element('#spinner').fadeOut(500);
            return $q.reject(reason);
        }

        return service;
    };    
}());
