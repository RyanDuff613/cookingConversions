$(document).ready(function(){

  function convertToOunces(userGrams) {
    return userGrams*0.035274;
  };

  $("form#gramsToOunces").submit(function(event){
    event.preventDefault();
    var userGrams = parseInt($('#inputGrams').val());
    var converted = convertToOunces(userGrams);
    console.log(userGrams);
    console.log(converted)
    $('#conversion').text(userGrams + ' grams is '+converted+' ounces');
  });
});