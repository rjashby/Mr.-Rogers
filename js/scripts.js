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
  $("#result").html(responseArray.join(", "));
  return responseArray.join(" ");
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let userNumber = parseInt($("input#number").val());
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
    rogers(userNumber);
    setTimeout(function() {
      $("#warn").show();
      window.scrollTo(0,document.body.scrollHeight);
    }, 6000);
  });

  $("button#warn").click(function() {
    $(".calculating").hide();
    $(".output").hide();
    $("#result").hide();
    setTimeout(function() {
      $(".missy").show();
      window.scrollTo(0,document.body.scrollHeight);
    }, 700);
  });
});


