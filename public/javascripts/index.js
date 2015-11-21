var arr = [];

$(document).ready(
   function() {
    setInterval(function() {
       $.getJSON("http://107.170.149.67/count", function(response) {
        console.log(response);
        $('#count').html(response);

       }).fail()
     }, 500);
   

 }  
);