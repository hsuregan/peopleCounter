function getReps() {
	setInterval(function() {
     $.getJSON("http://107.170.149.67/reps/count", function(response) {
      console.log(response);
      $('#reps').html(response);
     }).fail()
   }, 1000);

}