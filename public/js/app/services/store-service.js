(function() {
	angular.module('app.services').factory('StoreService', StoreService);

	StoreService.$inject = ['$localStorage', '$rootScope'];

	function StoreService($localStorage, $rootScope) {
		var data = {
			get: get,
			add: add,
			save: save,
			remove: remove
		};

		var _searchTerms = $localStorage.booksSearch || [];

		function get() {
			return _searchTerms;
		}

		function add(searchTerm) {
			_searchTerms.push(searchTerm);
			save();
		}

		function remove(searchTerm) {
			for (var i = 0; i < _searchTerms.length; i++) {
				if (_searchTerms[i] === searchTerm) {
					_searchTerms.splice(i, 1);
				}
			}
			save();
		}

		function save() {
			$localStorage.booksSearch = _searchTerms;
		}

		$rootScope.$watch(function() {
	        return _searchTerms;
	    }, function() {
	        save();
	    }, true);

		return data;
	}	
}());
    	

