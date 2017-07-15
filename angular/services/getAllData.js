'use strict'
gotApp.factory('getAllDataService', ['$http', function($http) {
    var main = this; //setting the context
    var getAllBookData = function(booksUrl, pageNum, pageData) {
        var allUrl = {};
        return $http({
            method: 'GET',
            url: booksUrl,
            params: { page: pageNum, pageSize: pageData }
        });
    }
    var getAllCharacters = function(charUrl, pageNum, pageData) {
        var allUrl = {};
        return $http({
            method: 'GET',
            url: charUrl,
            params: { page: pageNum, pageSize: pageData }
        });
    }
    var getAllHouses = function(houseUrl, pageNum, pageData) {
        var allUrl = {};
        return $http({
            method: 'GET',
            url: houseUrl,
            params: { page: pageNum, pageSize: pageData }
        });
    }
    return {
        getAllBookData: getAllBookData,
        getAllCharacters: getAllCharacters,
        getAllHouses: getAllHouses
    }
}]);
