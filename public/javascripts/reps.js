function getReps() {
	setInterval(function() {
     $.getJSON("http://localhost:3000/reps/count", function(response) {
      console.log(response);
      $('#reps').html(response);
     }).fail()
   }, 1000);

}