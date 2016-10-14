(function(){
    var app= angular.module('app');
   
    
     var userInfoCard=function(){
    return{
      templateUrl: "template/unserInfoCard.htm",
      restrict: "E",
		} 
	 };
  app.directive('zxUserInfoCard',userInfoCard);
}());
