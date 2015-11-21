$(document).ready(
   function() {
    setInterval(function() {
       $.getJSON("http://107.170.149.67:3000/count", function(response) {
        console.log(response);
        $('#count').html(response);
       }).fail()
     }, 500);
   }
);