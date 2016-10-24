// Code goes here

(function() {
  
  
  var app = angular.module("gitHubViewer", []);


  var MainController = function($scope, $http) {

    var onResponseListner = function(response) {
      $scope.user = response.data;
      
      $http.get($scope.user.repos_url).then(onRepos,onErrorListner);
    };
    var onRepos=function(response){
      $scope.repos=response.data;
     if($scope.repos.length==0){
       $scope.no_tables="Zero Reporistory ";
        $scope.tab=$scope.repos.length;
     }else{
       $scope.tab=$scope.repos.length;
     }
    };
    var onErrorListner = function(reason) {
      $scope.error = "Could not fetch the user";
    };

    
    $scope.search=function(username){
      $http.get("https://api.github.com/users/"+username)
      .then(onResponseListner, onErrorListner);
    $scope.show=function(url){
      $scope.user_url=url;
    };
      
    };
    $scope.username="Angular";
    $scope.message = "GitHub Viewer";
    $scope.repoSortOrder="-stargazers_count";
    
  };
  
  
    app.controller("MainController",["$scope","$http", MainController]);

}());