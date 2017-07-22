gotApp.factory('getSaveDataBooks', ['$q','$http', 'getAllDataService', '$interval', function($q, $http, getAllDataService, $interval) {
     var main = this;
     main.books = 0;
     main.booksArr = [];
     var deferred = $q.defer();
     var timerBooks;

    var getAllBooksHelper = function(bookUrl, pageData){
        ++main.books;
        getAllDataService.getAllBookData(main.bookUrl, main.books , main.pageData).then(function successCallback(response){
                //console.log(main.bookUrl+ main.books + main.pageData);
                //console.log(response);
                for(var indx in response.data){
                   var tmpOject = {
                            "name": response.data[indx].name,
                            "bookName": response.data[indx].name,
                            "url" : response.data[indx].url,
                            "id"  : response.data[indx].url.substring(response.data[indx].url.lastIndexOf('/')+1),
                            "authors": response.data[indx].authors,
                            "released": response.data[indx].released,
                            "type": "books",
                            "result_id": main.books
                   };
                   main.booksArr.push(tmpOject);
                }
                
	     });

    }

    
    var getAllBooks = function(bookUrl, pageData){
    	main.bookUrl = bookUrl;
    	main.pageData = pageData;
        clearInterval(timerBooks);
    	timerBooks = $interval(getAllBooksHelper,1000,3).then(function(){
    		//console.log(main.booksArr);
    		 deferred.resolve(main.booksArr);
    		
    	});
    	return deferred.promise;
    }

    return{
    	getAllBooks: getAllBooks
    }


    

}]);
