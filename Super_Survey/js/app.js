(function(){

    var app= angular.module('app',["ngRoute"]);
   
    app.config(function($routeProvider){
         $routeProvider
            .when("/",{
                templateUrl:"template/main.htm",
                controller:"mainCtrl"
            })
            .otherwise({
                redirectTo:"/"
            });
    });

   
}());