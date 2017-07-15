'use strict'
gotApp.directive("allCharacters", ['$compile', '$templateRequest', '$interpolate', function ($compile, $templateRequest, $interpolate){
   /*return {
   		restrict:'EA',
        templateUrl: 'angular/directives/templates/characters.template.html'
    }*/
    var templateUrl = 'angular/directives/templates/characters.template.html';
    return{
    compile: function( tElement, tAttributes ) {

            return {
                pre: function preLink( scope, element, attributes ) {
                    
                },
                post: function postLink( scope, element, attributes ) {
                    $templateRequest(templateUrl).then(function(html){
                        var ele = angular.element(html);
                    element.parent().append(ele);
                    //element.append((ele));
                    $compile(ele)(scope);
                    //console.log(element.find('#characters-ul'));
                    });
                }
            };
         }
    }
}]);