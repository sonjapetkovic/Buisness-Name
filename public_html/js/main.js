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
       
      $('.slider-testimonial').owlCarousel({
          dots:true,
          nav:false,
          loop:true,
          responsive:{
              0:{
                  items:1
              },
              576:{
                  items:2,
                  margin:30
              }
          }
      });
       
   }
    
    
    
    
    
    
    
    
    
});//document ready end


