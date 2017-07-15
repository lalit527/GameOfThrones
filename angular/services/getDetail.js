'use strict'
gotApp.factory('getDetailFactory', ['$http', function($http) {
    var main = this; //setting the context
    main.url = 'https://anapioficeandfire.com/api/';
    var getdetailData = function(type, id) {
       return $http({
            method: 'GET',
            url: main.url+type+'/'+id
        });
    }
    return {
        getdetailData: getdetailData
    }
}]);
