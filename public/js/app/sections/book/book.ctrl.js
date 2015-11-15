(function() {
	angular.module('app.core').controller('BookController', BookController);
	 
	BookController.$inject = ['data'];
	 
	function BookController(data) {

		var vm = this;

		vm.data = data;

	}	
}());
    	
