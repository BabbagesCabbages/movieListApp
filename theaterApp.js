var theaterApp = angular.module("theaterApp", []);
 

theaterApp.config(function($routeProvider){
    console.log($routeProvider);
    $routeProvider
        .when("/",{
            controller: "MoviesCtrl",
            templateUrl: "moviesView.html"
        });
 
    $routeProvider.otherwise({"redirectTo": "/"});  
});


