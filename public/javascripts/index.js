var background = "rgba(255, 0, 0,";
var people = [];
var time = [];
var max = 0;
var count = 0;

var sec = 0;
var min = 0;
var hrs = 0;


//$(document).ready(
function go(full) {
  setInterval(function() {
     if(sec == 59) {
        sec = 0;
        if(min == 59) {
          min = 0;
          hrs = hrs + 1;
        } else {
          min = min + 1;
        }
     } else {
        sec = sec + 1;
     }

     //set elements here
     $('#time').html(hrs + " hrs " + min + " mins " + sec + " secs have elapsed");


   }, 1000);



  var theChart = new Chartist.Line('.ct-chart', {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [1, 2, 3, 1, 2, 0, 1, 0]
      ]
    }, {
      height: 200,
      showPoint: false,
      //width: 500,
      //high: 15,
      //low: 0,
      fullWidth: true,
      axisX: {
        showGrid: false,
        showLabel: false,


      },
      // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
      axisY: {
        onlyInteger: true,
        offset: 20,
        showPoint: false

      }
    });

  //   theChart.on('draw', function(data) {
  //   // If this draw event is of type bar we can use the data to create additional content
  //   if(data.type === 'bar') {
  //     // We use the group element of the current series to append a simple circle with the bar peek coordinates and a circle radius that is depending on the value
  //     data.group.append(new Chartist.Svg('circle', {
  //       cx: data.x2,
  //       cy: data.y2,
  //       r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
  //     }, 'ct-slice-pie'));
  //   }
  // });


  var updateChart = function(time, people){
      var data = {
        labels: time,
        series: [people]
      };
      //console.log(people);
      //theChart.options.showGrid = false;
      theChart.data = data;
      //max = max > people[people.length-1] ? max : people[people.length-1];

      theChart.update();
    }
  

  setInterval(function() {
     $.getJSON("http://107.170.149.67/count", function(response) {
      //console.log(response);
      console.log('FULL: ' + 1/full);
      $('#highlight').css('background', background+(response*(1/full)));
      $('#count').html(response);
      time.push(time.length+1);
      people.push(response);
      updateChart(time, people);
      if(people[people.length-1] >= full) {
        console.log($('body').css('background-color'));
        $('#WARNING').html('<br /> MAXIMUM CAPACITY REACHED');
        if($('body').css('background-color') == 'rgb(255, 0, 0)') {
          $('body').css('background-color', 'white');
        } else {
          $('body').css('background-color', 'red');
        }
      } else {
        $('#WARNING').html('');
        $('body').css('background-color', 'white');
      }


     }).fail()
   }, 1000);



};
//);

