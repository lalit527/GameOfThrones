gotApp.factory('getSaveData', ['$q','$http', 'getAllDataService', '$interval', function($q, $http, getAllDataService, $interval) {
     var main = this;
     main.houses = 1;
     main.characters = 1;
     main.houseArr = [];
     main.charsArr = [];
     main.allData = [];
     var deferred = $q.defer();

     //console.log('IN New1');
     var getAllHousesHelper = function(){
     	//console.log('IN New4');
        getAllDataService.getAllHouses(main.houseurl, main.houses, main.pageData).then(function successCallback(response){
                /*console.log(JSON.stringify(response.data));*/
                //console.log(JSON.stringify(response.data));
                //console.log('IN New5');
                for(var indx in response.data){
                   var tmpOject = {
                            "name": response.data[indx].name,
 							"houseName": response.data[indx].name,
 							"url" : response.data[indx].url,
                            "id"  : response.data[indx].url.substring(response.data[indx].url.lastIndexOf('/')+1),
                            "region" : response.data[indx].region,
                            "titles" : response.data[indx].titles,
                            "words" : response.data[indx].words,
                            "type": "houses",
                            "resultId": main.houses
                   };
                   main.houseArr.push(tmpOject);
                   main.allData.push(tmpOject);
                }
                ++main.houses;
	     });

    }


    var getAllHouses = function(houseUrl, pageData){
    	//console.log('IN New2');
    	main.houseurl = houseUrl;
    	main.pageData = pageData;
    	$interval(getAllHousesHelper,500,10).then(function(){
    		//console.log('IN New3');
    		//console.log(main.houseArr);
    		 deferred.resolve(main.houseArr);
    		
    	});
    	return deferred.promise;
    }
    

    return{
    	getAllHouses: getAllHouses
    }


    

}]);