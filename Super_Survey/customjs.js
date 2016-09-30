function onLoad(){
	var _height=window.innerHeight;
	var _parent_div=document.getElementsByClassName("parent_div");
	for(var i=0;i<_parent_div.length;i++){
		_parent_div[i].style.height=_height+"px";
		}
	/* 
	var canvas=document.getElementById("myCan");
	var brush= canvas.getContext('2d');
	brush.strokeStyle='red';
	brush.lineWidth=3;
	brush.beginPath();
	brush.moveTo(300,300);
	brush.lineTo(300,200);
	brush.stroke(); */
alert(_height);
}