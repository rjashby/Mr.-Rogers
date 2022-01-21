function rogers(number) {
  const initialArray = [];
    for (let index = 0; index <= number; index ++) {
      initialArray.push(index);
    };
    const responseArray = []
  initialArray.forEach(function(number) {
    if (number.toString().includes(3)) {
      responseArray.push("Won't you be my neighbor?");
    } else if (number.toString().includes(2)) {
      responseArray.push("Boop!");
    } else if (number.toString().includes(1)) {
      responseArray.push("Beep!");
    } else {
      responseArray.push(number);
    }
  });
  $(".output").html(responseArray);
  return responseArray;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let userNumber = parseInt($("input#number").val());
    console.log(userNumber);
    $(".calculating").hide();
    $(".output").hide();
    $(".calculating").show();
    $(".output").show();
    rogers(userNumber);
    // window.scrollTo(0,document.body.scrollHeight);
  });
});