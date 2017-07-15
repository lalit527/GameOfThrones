gotApp.controller('gotDetailController', ['$http', '$routeParams', 'getDetailFactory', '$location', function($http, $routeParams, getDetailFactory, $location){
     var main = this;
     main.type = $routeParams.type;
     main.id = $routeParams.id;
     main.allDetails;
     console.log(main.type);
     console.log(main.id);
     main.goToDetail =  function(url){
        var lastIndex = url.lastIndexOf('/');
        var id = url.substring(url.lastIndexOf('/')+1);
        var type = url.substring(url.lastIndexOf('/', lastIndex-1)+1, lastIndex);
        $location.path('/details/'+type+'/'+id);
    }
     main.detailData = getDetailFactory.getdetailData(main.type, main.id).then(function(response){
             main.allDetails = response.data;
        });
}]);