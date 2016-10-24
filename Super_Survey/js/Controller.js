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
	  
	 var incomingQuest={'data':[{'num':'1','title':'Question is itself a question what to ask then?'},{'num':'2','title':'Wow again a question?'},{'num':'3','title':'Now question\'s has it\'s own questions?'},{'num':'4','title':'Question can be a answers?'},{'num':'5','title':'Why question is a question not a pizza?'},{'num':'6','title':'So what is the question?'}]};
	 $scope.questions=incomingQuest.data;
	  $scope.questLength=incomingQuest.data.length;
	  console.log(incomingQuest.data.length+" "+$scope.questions);
	   console.log("I am Controller"+$scope.questLength);
	  $scope.motion="animate-origin"
	   
	  $scope.show='show';
	  var i=0;
	 

	   var testin=function(){console.log("Swatch");};

   $scope.testing=testin;

  };
   app.controller('mainCtrl',["$scope",mainCtrl]);

  
 
}());