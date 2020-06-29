$(function() {
   $('.slider').slick({
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev arrow"></img></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></img></button>',
      // fade: true
      responsive:[
         {
            breakpoint: 441,
            settings:{
               arrows: false,
            }
         }
      ]
   });
});