$(document).ready(function() {

  let totalPayouts = $(".salary");
  console.log(totalPayouts);
  
  let btn = $("#count-sum");

  let outcome =$("#sum");

  let result = 0;

  btn.click(function(){
    totalPayouts.each(function() {

      result += parseFloat($(this).html());

    });
    outcome.text(result);
    console.log(result);
  });

});

