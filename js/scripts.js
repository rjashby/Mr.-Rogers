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
  let responseString = responseArray.join(", ")
  $("#result").html(responseString);
  let reverse = responseArray.reverse().join(", ");
  $("#reverseResult").html(reverse);
  return responseString;
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let userNumber = parseInt($("input#number").val());
    $('input[type="text"]').val('');
    $(".calculating").hide();
    $(".output").hide();
    setTimeout(function() {
      $(".calculating").show();
      window.scrollTo(0,document.body.scrollHeight);
    }, 400);
    setTimeout(function() {
      $(".output").show();
      window.scrollTo(0,document.body.scrollHeight);
    }, 4800);
    $("#insertNum").text(userNumber);
    rogers(userNumber);
    setTimeout(function() {
      $("#warn").show();
      window.scrollTo(0,document.body.scrollHeight);
    }, 6000);
  });

  $("button#warn").click(function() {
    let soundclick = document.getElementById("myAudio");
    soundclick.play();
    $(".calculating").hide();
    $(".output").hide();
    $("#result").hide();
    $(".missy").show();
  });
});


