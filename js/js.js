$( document ).ready(function() {

  var countTo = new Date('10/03/2016');

  var sec = 1000,
    min = sec * 60,
    hour = min * 60,
    day = hour * 24,
    month = 30; // appr. 30 days per month

  setInterval(function() {
    var now = new Date();

    var timeRem = countTo - now;
  
    var months = Math.floor((timeRem / day) / month); 
    var days = Math.floor((timeRem / day) - (months * month)); 
    var hours = Math.floor((timeRem % day) / hour);
    var minutes = Math.floor((timeRem % hour) / min);
    var seconds = Math.floor((timeRem % min) / sec);
    
    $("#countdown span").html(months + "M " + days + "D "+ hours + "H " + minutes + "M " + seconds + "S");
  }, 1000);
  
  $("#nav-toggle").on("click", function() {
    $("#nav-toggle + ul").toggle();
  });
  
});