function onLoad(){
	var _height=window.innerHeight;
	var _parent_div=document.getElementsByClassName("parent_div");
	for(var i=0;i<_parent_div.length;i++){
		_parent_div[i].style.height=_height+"px";
		}

}

function play(){
	alert("Something done");
}