(function(){
  	function onLoad(){
	var _height=window.innerHeight;
	var _parent_div=document.getElementsByClassName("parent_div");
	for(var i=0;i<_parent_div.length;i++){
		_parent_div[i].style.height=_height+"px";
		}

}
  
 var app= angular.module('app');
  
 
  
  var mainCtrl=function($scope){
   
  };
   app.controller('mainCtrl',["$scope",mainCtrl]);

  
  var myQuestions=function($scope){
	  $scope.quest={'data':[{'number':'1','title':'Question is itself a question what to ask then?'},{'number':'2','title':'Question is itself a question what to ask then?'},{'number':'3','title':'Question is itself a question what to ask then?'},{'number':'4','title':'Question is itself a question what to ask then?'},{'number':'5','title':'Question is itself a question what to ask then?'},{'number':'6','title':'Question is itself a question what to ask then?'}]};
  };
   app.controller('myQuestions',["$scope",myQuestions]);
 
}());