angular.module('app.routes', ['ngRoute', 'app.core']).config(routes);

function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/app/sections/home/home.tpl.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/search/:searchTerm/page/:page', {
            templateUrl: 'js/app/sections/search/search.tpl.html',
            controller: 'SearchController',
            controllerAs: 'search',
            resolve: {
                data: function(DataService, $route, $location) {
                    var res = DataService.search($route.current.params.searchTerm, $route.current.params.page);
                    
                    if (res !== false) {
                        return res;
                    } else {
                        $location.path('/404');
                    }
                }
            }
        })
        .when('/book/:id', {
            templateUrl: 'js/app/sections/book/book.tpl.html',
            controller: 'BookController',
            controllerAs: 'book',
            resolve: {
                data: function(DataService, $route, $location) {
                    var res = DataService.getBook($route.current.params.id);

                    if (res !== false) {
                        return res;
                    } else {
                        $location.path('/404');
                    }
                }
            }
        })
        .when('/404', {
            templateUrl: 'js/app/sections/404/404.tpl.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}