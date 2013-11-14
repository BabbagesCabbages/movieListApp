theaterApp.controller("MoviesCtrl", function ($scope, $http){
    $http.get("movies.json")
        .then(function(results){
            //Success;
            console.log("Success: " + results.status);
            $scope.movies = results.data;
        }, function(results){
            //error
            console.log("Error: " + results.data + "; "
                                  + results.status);
        })
});
