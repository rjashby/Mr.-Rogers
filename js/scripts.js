$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());
    $(".calculating").hide();
    $(".output").hide();

    window.scrollTo(0,document.body.scrollHeight);
  });
});


function rogers(number) {
  const initialArray = [];
    for (let index = 0; index <= number; index ++) {
      initialArray.push(index)
    };
    console.log(initialArray);
  }

//     const responseArray = []
//   initialArray.forEach(function(number) {
//     if (number === "1") {
//       responseArray.push("Beep!");
//     } else if (number === "2") {
//       responseArray.push("Boop!");
//     } else if (number === "3") {
//       responseArray.push("Won't you be my neighbor?");
//     } else {
//       responseArray.push(number);
//     }
//   });
//   // console.log(responseArray[12]);
//   // console.log(responseArray[20]);
//   // console.log(responseArray[32]);
//   return responseArray;
// }