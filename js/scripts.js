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
  let initialArray = number.toString().split("");
  let responseArray = []
  initialArray.forEach(function(number) {
    if (number === "1") {
      responseArray.push("Beep!")
    } else if (number === "2") {
      responseArray.push("Boop!")
    } else if (number === "3") {
      responseArray.push("Won't you be my neighbor?")
    } else {
      responseArray.push(number);
    }
  });
  return responseArray;
}