(function() {
	angular.module('app.core').controller('HomeController', HomeController); 
	
	HomeController.$inject = ['$location', 'StoreService'];

	function HomeController($location, StoreService) {

		var vm = this;

		vm.searchText = '';
		vm.currentPage = 1;
		vm.searches = StoreService.get();

		vm.query = function() {
			var url = 'search/' + vm.searchText + '/page/' + vm.currentPage ;
			$location.path(url);
			StoreService.add(vm.searchText);
		};

		vm.remove = function(searchText) {
			StoreService.remove(searchText);
		};

		vm.goTo = function(searchText) {
			var url = 'search/' + searchText + '/page/1';
			$location.path(url);
		};
	}	
}());
    	
