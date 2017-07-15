'use strict'
gotApp.controller('gotMainController', ['$scope','$http', 'getAllUrlService', 'getAllDataService', 'getDetailFactory', '$location', "NgTableParams", "$interval", "$timeout", '$routeParams', function($scope, $http, getAllUrlService, getAllDataService, getDetailFactory, $location, NgTableParams, $interval, $timeout, $routeParams){
    var main = this;
    main.allUrl = {};
    main.books = 1;
    main.bookUrl;
    main.charcUrl;
    main.houseUrl;
    main.booksArr=[];
    main.charsArr=[];
    main.houseArr=[];
    main.allData = [];
    main.charsUrl;
    main.characters = 1;
    main.houses = 1;
    main.dataPerRequest = 50;
    var bookUrl;
    main.goToDetail =  function(url){
        var lastIndex = url.lastIndexOf('/');
        var id = url.substring(url.lastIndexOf('/')+1);
        var type = url.substring(url.lastIndexOf('/', lastIndex-1)+1, lastIndex);
        $location.path('/details/'+type+'/'+id);
    }
    console.log($routeParams.books);
    main.filterData = ['ALL', 'BOOKS', 'CHARACTERS', 'HOUSES'];
    main.resultData = 'ALL';
    main.bookName = 'bookName';
    main.characterName = 'characterName';
    main.houseName = 'houseName';
    main.authors = 'authors';
    main.released = 'released';
    main.born = 'born';
    main.died = 'died';
    main.region = 'region';
    $scope.sortData = 'characterName';
    $scope.toggleSort = function(ele){
        if($scope.sortData === '-'+ele){
           $scope.sortData = ele;
        }else{
           $scope.sortData = '-'+ele; 
        }
        console.log($scope.sortData);
        $scope.sortData.$apply;
        //$scope.tableParams.reload();
    }

    
    
    main.getAllBooks = function(bookUrl, books, pageData){
         getAllDataService.getAllBookData(bookUrl, books, pageData).then(function successCallback(response){
                /*console.log(JSON.stringify(response.data[0].name));
                console.log(JSON.stringify(response.data[0].url));*/
                for(var indx in response.data){
                   var tmpOject = {
                            "name": response.data[indx].name,
 							"bookName": response.data[indx].name,
 							"url" : response.data[indx].url,
                            "id"  : response.data[indx].url.substring(response.data[indx].url.lastIndexOf('/')+1),
                            "authors": response.data[indx].authors,
                            "released": response.data[indx].released,
                            "type": "books"
                   };
                   main.booksArr.push(tmpOject);
                   main.allData.push(tmpOject);

                }
                ++main.books;
	     });
	};
	main.getAllCharacters = function(charsUrl,characters,pageData){
       getAllDataService.getAllCharacters(charsUrl, characters, pageData).then(function successCallback(response){
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
                   main.allData.push(tmpOject);

                }
                ++main.characters;
         });
	}
	main.getAllHouses = function(houseUrl, houses, pageData){
        getAllDataService.getAllHouses(houseUrl, houses, pageData).then(function successCallback(response){
                /*console.log(JSON.stringify(response.data));*/
                //console.log(JSON.stringify(response.data));
                for(var indx in response.data){
                   var tmpOject = {
                            "name": response.data[indx].name,
 							"houseName": response.data[indx].name,
 							"url" : response.data[indx].url,
                            "id"  : response.data[indx].url.substring(response.data[indx].url.lastIndexOf('/')+1),
                            "region" : response.data[indx].region,
                            "titles" : response.data[indx].titles,
                            "words" : response.data[indx].words,
                            "type": "houses"
                   };
                   main.houseArr.push(tmpOject);
                   main.allData.push(tmpOject);
                }
                ++main.houses;
	     });

	}
    main.getAllData = function(bookUrl, books, charsUrl, characters, houseUrl, houses, pageData){
         if(books <= 1){
            getAllDataService.getAllBookData(bookUrl, books, pageData).then(function successCallback(response){
                /*console.log(JSON.stringify(response.data[0].name));
                console.log(JSON.stringify(response.data[0].url));*/
                for(var indx in response.data){
                   var tmpOject = {
                            "name": response.data[indx].name,
                            "url" : response.data[indx].url,
                            "type": "books"
                   };
                   main.booksArr.push(tmpOject);
                   main.allData.push(tmpOject);
                }
                ++main.books;
            });
         }
         if(characters <= 43){
            getAllDataService.getAllCharacters(charsUrl, characters, pageData).then(function successCallback(response){
                /*console.log(JSON.stringify(response.data));*/
                //console.log(JSON.stringify(response.data));
                for(var indx in response.data){
                   var tmpOject = {
                            "name": response.data[indx].name,
                            "url" : response.data[indx].url,
                            "type": "characters"
                   };
                   main.charsArr.push(tmpOject);
                   main.allData.push(tmpOject);
                }
                ++main.characters;
            });
         }
         if(houses <= 9){
            getAllDataService.getAllHouses(houseUrl, houses, pageData).then(function successCallback(response){
                /*console.log(JSON.stringify(response.data));*/
                //console.log(JSON.stringify(response.data));
                for(var indx in response.data){
                   var tmpOject = {
                            "name": response.data[indx].name,
                            "url" : response.data[indx].url,
                            "type": "houses"
                   };
                   main.houseArr.push(tmpOject);
                   main.allData.push(tmpOject);

                }
                ++main.houses;
            });
         }
    }
    main.counter = 0;
	main.urlObject = getAllUrlService.getAllUrlData().then(function successCallback(response){
                //console.log(response.headers()); 
                main.allUrl = response.data;
                main.bookUrl = response.data.books;
                main.charcUrl = response.data.characters;
                main.houseUrl = response.data.houses;
                main.getAllBooks(response.data.books, main.books, main.dataPerRequest);

                var getAllBook = function(){
                    main.getAllBooks(response.data.books, main.books, main.dataPerRequest);
                    main.tableBooks = new NgTableParams({
                      // initial sort order
                      page: 1,
                    count: 50,
                      sorting: { name: "asc" } 
                    }, {
                       dataset: main.booksArr
                    });

                }
                $timeout(getAllBook
                        ,2000);
                
                var getAllChar = function(){
                    main.getAllCharacters(response.data.characters, main.characters, main.dataPerRequest);
                    main.tableParams = new NgTableParams({
                      // initial sort order
                      page: 1,
                    count: 50,
                      sorting: { name: "asc" } 
                    }, {
                       dataset: main.charsArr
                    });

                }
                $interval(getAllChar
                        ,2500,43);

                var getAllHou = function(){
                    main.getAllHouses(response.data.houses, main.houses, main.dataPerRequest);
                    //console.log(main.houseArr);
                    main.tableHouse = new NgTableParams({
                      // initial sort order
                      page: 1,
                    count: 25,
                      sorting: { name: "asc" } 
                    }, {
                       //console.log(main.houseArr);
                       dataset: main.houseArr
                    });

                }
                $interval(getAllHou
                        ,2500,9);
                //$scope.$apply();
                

                //main.getAllCharacters(response.data.characters, main.characters, main.dataPerRequest);
                //for(var i=0; i<44; i++){

                     //main.getAllData(main.bookUrl, main.books, main.charcUrl, main.characters, main.houseUrl, main.houses, main.pageData);
                     // ++main.books;
                     // ++main.characters;
                     // ++main.houses;
                //}
                //console.log(main.charsArr);
                //var Api = $resource("/data");
                $scope.$watch('main.charsArr',function(newval, oldval){
                    //  console.log('changedarr'||main.charsArr.length);
                    if(newval!=oldval){
                         console.log('changed');
                             $scope.$apply();
                    }
                    
                }, true);
                
                
	});
	
}]);