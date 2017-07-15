'use strict'
gotApp.factory('getAllUrlService', ['$http', function($http){
	var main = this;//setting the context
	main.url = 'https://anapioficeandfire.com/api'; //the master url to get all book, characters, houses url
	var getAllUrlData = function(){
		var allUrl = {};
		//console.log(main.url);
		/*$http({
			method:'GET',
			url: main.url
		}).then(function successCallback(response){
			//console.log(JSON.stringify(response.data));
			console.log(response.data.books);
			console.log(response.data.characters);
			console.log(response.data.houses);
			allUrl = {
				"books": response.data.books,
				"characters": response.data.characters,
				"houses": response.data.houses
			};
			//console.log(allUrl);*/
		return $http({
				  method:'GET',
				  url: main.url
			   });
		}
	return{
		getAllUrlData: getAllUrlData
	}
}]);