$(document).ready(function() {


  

// var el = function (elements){
//   if (elements.Chart(0)===()){
//      return document.querySelector(elements); 
//   }
//   return document.querySelectorAll(elements); 
// };
    
  var screen = $('.screen');
  var evaluate = $('#eval');
  var num = $ ('.num');
  var operator = $('.operator');
  var frstprt = "";
  var scndprt = "";
  var result = "";
  var operatorClicked = false;
  var operatorType = "";
  // show number values:
  $(".num").click(function() {
    if (operatorClicked == true) {
      // console.log("clear screen");
      screen.empty();
      operatorClicked = false;
    }
    if (screen.text().length <= 8) {
      var value = $(this).attr("data-num");
      screen.append(value);
    } else {
      alert("You've exceeded the max char limit!");
    }
    // console.log(screen.text().length);
    
    // screen.append(value) = frstprt;
    // screen.append(value) = scndprt;
  });  
  
  $(".operator").click(function(){
    frstprt = screen.text();
    operatorClicked = true;
    // console.log(frstprt);

    operatorType = $(this).attr("data-opr");
    // console.log($(this).attr("data-opr"));
    // scndprt = screen.text();
    // }

    //   if else (scndprt.clicked == true){

    // }
  });

  $("#eval").click(function(){
    // temporary code to test addition operator
    // scndprt = screen.text();
    // var answer = +frstprt + +scndprt;
    // screen.text(answer);

    scndprt = screen.text();
    // scndprt = +scndprt;
    // frstprt = +frstprt;

    // switch to check operatorType
    console.log(operatorType);
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
      // case "percentage":
      // case "squareroot":
        
      default:
        console.log('default');
    }
  });
  $(".sqrot").click(function(){
    screen.text(math.sqrt(frstprt));
    });
  $(".prcent").click(function(){
    screen.text(math.divide(frstprt, 100));

  });

     $("#clear").click(function(){
      frstprt = "";
      screen.text("");
    // if ($(this.attr()===))     
      scndprt = "";
  });


});


  
//   var display = function(){
//     frstprt = parseFloat(frstprt);
//     scndprt = parseFloat(scndprt);
//   }
//   var displayNum = function() {

//   switch (operator){
//     case "times":
//     result = frstprt * scndprt;
//     break;

//     case "devided by":
//     result = frstprt / scndprt;
//     break;

//     case "plus":
//     result = frstprt + scndprt;
//     break;

//     case "minus":
//     result = frstprt - scndprt;
//     break;

//     case "percent":
//     // 20 % 100 (20% of 100)
//     // 20/100

//     case "square root"
//     // 

//     default:
//     result = scndprt;
//   }
//    if (!isFinite(result)){
//    if (isNaN(result)) {
//     result = "error!";
//     } else {
//       result = "Check what you did!";
//       el("#calculator").classList.add("broken");
//       el('#clear').classList.add("show");
//     }
//   }

//  