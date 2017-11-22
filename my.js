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
    scndprt = screen.text();
    var answer = +frstprt + +scndprt;
    screen.text(answer);

    // switch to check operatorType
    console.log(operatorType);
    switch (operatorType) {
      case "addition":
        scndprt = screen.text();
        var answer = +frstprt + +scndprt;
        screen.text(answer);

        // code gets run here when addition is clciked
        console.log('addition');
        answer = +frstprt + +scndprt;
        screen.text(answer);
        // answer = +frstprt + +scndprt;
        break;
      case "subtraction":
        // answer = -frstprt - -scndprt;
        console.log('subtraction');
        var answer = +frstprt - +scndprt;
        screen.text(answer);
        break;
      case "division":
        console.log('divition');
        answer = +firstpart / +scndprt;
        screen.text(answer);
        break;
      case "multiplication":
        console.log('mulltiplication')
        answer = +frstprt * +scndprt;
        screen.text(answer);
        break;
      case "percentage":
        console.log('percentage');
        answer = +frstprt / 100;
        screen.text(answer);
      case "squareroot":
        console.log('squareroot');
        answer =
        default:


        console.log('default');
      // screen.text(answer);
    }
  });
     $("#clear").click(function(){
      frstprt = "";
      screen.text("");
    // if ($(this.attr()===))     
      scndprt = "";
  });

  // switch (operator) {
  //   case "addition":
  //     answer = +frstprt + +scndprt;
  //   break;

  //   case "subtraction"
  //     answer = -frstprt - -scndprt;
  //   break;
  //     screen.text(answer);
  // }

  // and clears screen  // and clears screen
  // click function for + that sets the value of screen to firstpart
  // and clears screen
  // then user click more numbers and hits enter, enter function
  // sets the value of screen to second part and adds frst + scnd 
  // clears screen then adds the sum to screen

// do the calculation:
  // $(".operator").click(function(){
  //   var value = $(this).attr("data-opr");
  //   screen.
  // });

});

//   var showNum = function (){
//     if (result)
//       scndprt = this.getAttribute("data-num");
//       result = "";
//     } else {
//       scndprt += this.getAttribute("data-num");
//     }   
//     screem.innerHTML = scndprt;
//   };

//   var movNum = function(){
//     frstprt = scndprt;
//     scndprt ="";
//     operator = this.getAttribute("data-opr");

//     eval.setAttribute("data-result", "");
//   };

  
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

//  screen.innerHTML = result;
//   equa.setAttribute("data-result", result);
//   frstprt = 0;
//   scndprt = result;
 
//  };

//   var clr = function(){
//     frstprt = "";
//     scndprt = "";
//     screen.innerHTML = "0";
//     equa.setAttribute("data-result", result);
//   };

//   for (var b = 0, l = num.length; b < l b++){
//     num[b].onclick = showNum;
//   }
//   for (var b = 0, l = operator.length; b < l b++){
//     operator[b].onclick = movNum;
//   }

//   equa.onclick = display;

//   el("#clear").onclick = clr;

//   el("#clear").onclick = function(){
//     window.location = window.location;
//   };

// }());


