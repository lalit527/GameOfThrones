'use strict'
gotApp.factory('getBookDataServicexx', ['$http', function($http){
	var main = this;//setting the context
	var getAllBookData = function(booksUrl, pageNum, pageData){
		var allUrl = {};
		return $http({
				  method:'GET',
				  url: booksUrl,
				  params:{page: pageNum, pageSize: pageData}
			   });
		}
	return{
		getAllBookData: getAllBookData
	}
}]);