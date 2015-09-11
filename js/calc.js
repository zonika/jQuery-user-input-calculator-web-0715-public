'use-strict';
$(function(){
  var calculator = new Calculator()

});

// your code here!

function Calculator(){
  $('#equals').click(function() {
    var number1 = parseFloat($('#number1').val());
    var operator = $('#operation').val();
    var number2 = parseFloat($('#number2').val());
    check(number1,number2,operator);
  })
}


  check = function (num1,num2,opp) {
    if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '' ) {
      $('#result').text('Sorry, one of those is not a valid number!');
    } else {
      this.evaluate(num1,num2,opp)
    }
  };

  evaluate = function (num1,num2,opp) {
    switch(opp){
      case '-': $('#result').text(num1-num2); break;
      case '+': $('#result').text(num1+num2); break;
      case '/': $('#result').text(num1/num2); break;
      case '*': $('#result').text(num1*num2);break;
      default: $('#result').text('Sorry, not a valid operation!');break;
    }
  };
