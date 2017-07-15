//routing for league app

gotApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        /*.when('/books', {
            templateUrl: ' views/mainview.html'
        })*/
        .when('/',{
            // location of the template
            templateUrl     : 'views/mainview.html',
            controller      : 'gotMainController',
            controllerAs    : 'mainCtrl'
        })
        .when('/page-top', {
            template: ''
        })
        .when('/books',{
            // location of the template
            templateUrl     : 'views/mainview.html',
            controller      : 'gotMainController',
            controllerAs    : 'mainCtrl'
        })
        .when('/characters',{
            // location of the template
            templateUrl     : 'views/mainview.html',
            controller      : 'gotMainController',
            controllerAs    : 'mainCtrl'
        })
        .when('/houses',{
            // location of the template
            templateUrl     : 'views/mainview.html',
            controller      : 'gotMainController',
            controllerAs    : 'mainCtrl'
        })
		.when('/details/:type/:id',{
        	templateUrl     : 'views/detailview.html',
        	// Which controller it should use 
            controller 		: 'gotDetailController',
            // what is the alias of that controller.
        	controllerAs 	: 'detailCtrl'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);