 /* $(document).ready(function(){
      $('.slider').slider({full_width: false});
	  $.varx = $( window ).height();
    $('.slider').slider({height:$.varx-50});
	}); */

	
	function slide(Direction){
		
		var i=0;
		var ele_all = document.getElementsByClassName("hideable");
		var ele_vis_pos=-1;
		var make_vis=-1;
		for(i;ele_all.length;i++){
			if(ele_all[i].style.display=="block"){
				ele_vis_pos=i;
				ele_all[i].style.display="none";
				break;
			}
		}
		
		 if(!Direction==0){
			if(ele_vis_pos==(ele_all.length-1)){
				make_vis=0;
			}else{
				make_vis=ele_vis_pos+1;
			}
		}else{
			if(ele_vis_pos==0){
				make_vis=ele_all.length-1;
			}else{
				make_vis=ele_vis_pos-1;
			}
		}
		
		ele_all[make_vis].style.display="block";
		 
	}
	
	