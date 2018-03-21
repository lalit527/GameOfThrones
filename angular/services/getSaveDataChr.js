gotApp.factory('getSaveDataChar', ['$q','$http', 'getAllDataService', '$interval', function($q, $http, getAllDataService, $interval) {
     var main = this;
     main.characters = 0;
     main.charsArr = [];
     var deferred = $q.defer()
     var timerCharacter;
    var getAllCharactersHelper = function(){
        ++main.characters;
        getAllDataService.getAllHouses(main.characterUrl, main.characters , main.pageDataChar).then(function successCallback(response){
                /*console.log(JSON.stringify(response.data));*/
                //console.log(JSON.stringify(response.data));
                for(var indx in response.data){
                   var tmpOject = {
                            "name": response.data[indx].name,
                            "characterName": response.data[indx].name,
                            "url" : response.data[indx].url,
                            "id"  : response.data[indx].url.substring(response.data[indx].url.lastIndexOf('/')+1),
                            "gender": response.data[indx].gender,
                            "born": response.data[indx].born,
                            "title": response.data[indx].title,
                            "aliases": response.data[indx].aliases,
                            "died": response.data[indx].died,
                            "type": "characters"
                   };
                   main.charsArr.push(tmpOject);

                }
                
	     });

    }

    
    var getAllCharacters = function(characterUrl, pageData){
    	main.characterUrl = characterUrl;
    	main.pageDataChar = pageData;
        clearInterval(timerCharacter);
    	timerCharacter = $interval(getAllCharactersHelper,500,44).then(function(){
    		//console.log(main.charsArr);
            //console.log(main.characters);
    		 deferred.resolve(main.charsArr);
    		
    	});
    	return deferred.promise;
    }

    return{
    	getAllCharacters: getAllCharacters
    }


    

}]);
