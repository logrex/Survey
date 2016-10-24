(function(){
    var app= angular.module('app');
    
   
   //parent directive
   var dirItSelf=function($scope,elem,attrs){
           
            var id= $scope.quest.num-1;
            
            var mUp;
            var mDown;
            console.log(elem[0]+id+$scope.quest.num+$scope.questLength);
            if($scope.quest.num==1){
              $scope.motion="animate-origin-mid";
            }else if($scope.quest.num==2){
              $scope.motion="animate-origin-down";
            }
          
         
            
          
            //up button
             var moveUp=function(){

                  console.log("I am up"+document.getElementById(id).className+id);
                  if(id==0){
                    $("#"+id).removeClass("animate-origin-mid");
                    $("#"+id).removeClass("animate-up-mid");
                    $("#"+id).addClass("animate-mid-up");

                    $("#"+(id+1)).removeClass("animate-mid-down");
                    $("#"+(id+1)).removeClass("animate-origin-down");
                    $("#"+(id+1)).addClass("animate-down-mid");

                    $("#"+(id+2)).removeClass("animate-origin");
                    $("#"+(id+2)).removeClass("animate-down-origin");
                    $("#"+(id+2)).addClass("animate-origin-down");
                  
                  }else if(id>0 && id<$scope.questLength-1){
                    $("#"+(id-1)).removeClass("animate-origin-up"); 
                    $("#"+(id-1)).removeClass("animate-mid-up");
                    $("#"+(id-1)).addClass("animate-up-origin");

                    $("#"+id).removeClass("animate-up-mid");
                    $("#"+id).removeClass("animate-down-mid");
                    $("#"+id).addClass("animate-mid-up");

                    $("#"+(id+1)).removeClass("animate-mid-down");
                    $("#"+(id+1)).removeClass("animate-origin-down");
                    $("#"+(id+1)).addClass("animate-down-mid");

                    $("#"+(id+2)).removeClass("animate-down-origin");
                    $("#"+(id+2)).removeClass("animate-origin");
                    $("#"+(id+2)).addClass("animate-origin-down");
                  }


            
              };
             $scope.moveUp=moveUp;
          
          
          
           //down button
             var moveDown=function(){
               
                console.log("I am down");
                if(id==$scope.questLength-1){
                   
                    $("#"+id).removeClass("animate-down-mid");
                    $("#"+id).addClass("animate-mid-down");
                   
                    $("#"+(id-1)).removeClass("animate-mid-up");
                    $("#"+(id-1)).addClass("animate-up-mid");
                   
                    $("#"+(id-2)).removeClass("animate-up-origin");
                    $("#"+(id-2)).addClass("animate-origin-up");
                }else if(id>0){

                    $("#"+(id+1)).removeClass("animate-mid-down");
                    $("#"+(id+1)).removeClass("animate-origin-down");
                    $("#"+(id+1)).addClass("animate-down-origin");
                    
                    $("#"+id).removeClass("animate-down-mid");
                    $("#"+id).removeClass("animate-down-mid");
                    $("#"+id).addClass("animate-mid-down");
                    
                    $("#"+(id-1)).removeClass("animate-origin-up");
                    $("#"+(id-1)).removeClass("animate-mid-up");
                    $("#"+(id-1)).addClass("animate-up-mid");

                    $("#"+(id-2)).removeClass("animate-up-origin"); 
                    $("#"+(id-2)).removeClass("animate-down-origin");
                    $("#"+(id-2)).addClass("animate-origin-up");

                }
               
              };
             $scope.moveDown=moveDown;
    
   };
      
     var userInfoCard=function(){
    return{
      templateUrl: "template/unserInfoCard.htm",
      restrict: "E",
      scope:true,
      link:dirItSelf
		} 
	 };
  app.directive('zxUserInfoCard',userInfoCard);


}());
