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
  let responseArray = []
  responseArray.push(number);
  return responseArray;
}