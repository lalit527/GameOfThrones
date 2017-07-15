'use strict'
gotApp.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        console.log(element[0]);
        var raw = element[0];
        /*angular.element($window).bind("scroll", function() {
             if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                 //scope.boolChangeClass = true;
                 console.log('hello');
                 //window.alert('hello');
             }
            scope.$apply();
        });*/
    };
});