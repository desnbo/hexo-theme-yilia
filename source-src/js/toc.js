
//需要jQuery支持
function init()
 {
 	$(".js-toggle-toc").css('color', '#FF4081');
     $(".js-toggle-toc").text("丨☆丨+ Ⅴ ++ [-]");
 
     $(".js-toggle-toc").click(function(){
         var toc = $(".toc-content");
         toc.toggle();
         if (toc.is(":hidden")) {
             $(this).text("‖★‖-》- - [+]");
         } else {
             $(this).text("丨☆丨+ Ⅴ ++ [-]");
         }
         return false;
     });
 }
  
 module.exports = {
 	init : init
 }