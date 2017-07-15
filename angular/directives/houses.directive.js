'use strict'
gotApp.directive("allHouses", ['$compile', '$templateRequest', '$interpolate', function ($compile, $templateRequest, $interpolate){
   /*return {
   		restrict:'EA',
        templateUrl: 'angular/directives/templates/houses.template.html'
    }*/
    var templateUrl = 'angular/directives/templates/houses.template.html';
    return{
    compile: function( tElement, tAttributes ) {
            //console.log( tAttributes+ ' (compile)'  );

            return {
                pre: function preLink( scope, element, attributes ) {
                    //console.log( attributes.log + ' (pre-link)'  );
                    
                },
                post: function postLink( scope, element, attributes ) {
                    //console.log( attributes.log + ' (post-link)'  );
                    $templateRequest(templateUrl).then(function(html){
                        var ele = angular.element(html);
                    element.parent().append(ele);
                    //element.append((ele));
                    $compile(ele)(scope);
                    //console.log(element.parent());
                    });
                }
            };
         }
    }
}]);