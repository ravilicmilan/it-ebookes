(function() {
	angular.module('app.core').controller('SearchController', SearchController);

	SearchController.$inject = ['data', '$route', '$location'];
	 
	function SearchController(data, $route, $location) {

		var vm = this;

		vm.url = $route.current.params;
		vm.results = data.Books;
		vm.currentPage = parseInt(vm.url.page) || 1;
		vm.perPage = 10;
		vm.totalResults = parseInt(data.Total);
		vm.nextPage = false;
		vm.prevPage = false;
		vm.prevNum = 0;
		vm.nextNum = 0;

		vm.totalPages = Math.ceil(vm.totalResults / vm.perPage);
		
		if (vm.currentPage > vm.totalPages) {
			$location.path('/404');
		}

		if (vm.currentPage > 1) {
			vm.prevPage = true;
		}

		if (vm.currentPage < vm.totalPages) {
			vm.nextPage = true;
		}

		
		vm.nextNum = vm.currentPage * vm.perPage;
		vm.prevNum = vm.nextNum - vm.perPage + 1;


		vm.query = function(page) {
			var url = '/search/' + vm.url.searchTerm + '/page/' + page;
			$location.path(url);
			vm.currentPage = page;
			$('body').animate({ scrollTop: -10000 }, 800);
		};

	}	
}());
    	

