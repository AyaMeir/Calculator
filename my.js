$(document).ready(function() {
    
  // set variables
  var screen = $('.screen');
  var evaluate = $('#eval');
  var num = $ ('.num');
  var operator = $('.operator');
  var frstprt = "";
  var scndprt = "";
  var result = "";
  var operatorClicked = false;
  var operatorType = "";
  
  // show number values
  $(".num").click(function() {
    if (operatorClicked == true) {
      screen.empty();
      operatorClicked = false;
    }
    if (screen.text().length <= 8) {
      var value = $(this).attr("data-num");
      screen.append(value);
    } else {
      alert("You've exceeded the max char limit!");
    }
  });  
  
  // operator click
  $(".operator").click(function(){
    frstprt = screen.text();
    operatorClicked = true;
    operatorType = $(this).attr("data-opr");
  });

  // equal click function
  $("#eval").click(function(){
    // get second value
    scndprt = screen.text();
    
    // do the calculation
    switch (operatorType) {
      case "addition":
        screen.text(math.add(frstprt, scndprt));
        break;
      case "subtraction":
        screen.text(math.subtract(frstprt, scndprt));
        break;
      case "division":
        screen.text(math.divide(frstprt, scndprt));
        break;
      case "multiplication":
        screen.text(math.multiply(frstprt, scndprt));
        break;      
      default:
        alert('Not a valid operator.');
    }
  });

  // sqrt click function 
  $(".sqrt").click(function(){
    screen.text(math.sqrt(frstprt));
  });

  // percent click function
  $(".prcent").click(function(){
    screen.text(math.divide(frstprt, 100));
  });

  // clear screen
  $("#clear").click(function(){
    frstprt = "";
    screen.text("");
    scndprt = "";
  });
});

// example code
//    if (!isFinite(result)){
//    if (isNaN(result)) {
//     result = "error!";
//     } else {
//       result = "Check what you did!";
//       el("#calculator").classList.add("broken");
//       el('#clear').classList.add("show");
//     }
//   }