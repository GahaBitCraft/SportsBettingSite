var header = document.getElementById("wagerAmounts");
var btns = header.getElementsByClassName("amount");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("wagerAmtActive");
  current[0].className = current[0].className.replace(" wagerAmtActive", "");
  this.className += " wagerAmtActive";
  });
}