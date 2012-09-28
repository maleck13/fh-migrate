
$(document).bind('pageinit', function (){
   $('#list').children('a').click(function (){
      alert("clicked " + $(this).text());
   });
});