$(document).ready(function(){


  $("form#gramsToOunces").submit(function(event){
    event.preventDefault();

    var userGrams = parseInt($('#inputGrams').val());
    console.log(userGrams);
    $('#conversion').text(userGrams);
  
  });
});