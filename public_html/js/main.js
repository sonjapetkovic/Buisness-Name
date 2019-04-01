$(document).ready(function(){
   
   //Owl carousel
   
   if($('.owl-carousel').length > 0){
       //lead-slider
       $('.lead-slider').owlCarousel({
           items:1,
           nav:true,
           dots:true,
           loop:true,
           navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
           autoplay:true
       }); 
       
       
   }
    
    
    
    
    
    
    
    
    
});//document ready end


