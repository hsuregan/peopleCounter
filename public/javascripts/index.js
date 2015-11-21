$(document).ready(
   function() {
    setInterval(function() {
       $.getJSON("http://localhost:3000/count", function(response) {
        //console.log(response);
        $('#count').html(response);
       }).fail()
     }, 500);
   }
);