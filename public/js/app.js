(function() {
	angular.module('app', ['app.routes', 'app.services'])
		.config(config);

	config.$inject = ['$routeProvider', '$locationProvider',  '$httpProvider'];

	function config($routeProvider, $locationProvider,  $httpProvider) {
		 $httpProvider.interceptors.push('authHttpResponseInterceptor');
	}
}());
    	
