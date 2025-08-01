var wagerAmntBtns = document.getElementById("wagerAmnts");
var wagerAmntBtnFirstTwo = wagerAmntBtns.getElementsByClassName("amo");
var wagerAmntBtnSecondTwo = wagerAmntBtns.getElementsByClassName("amnt");
var wagerAmntBtnLastFour = wagerAmntBtns.getElementsByClassName("amt");
for (var i = 0; i < wagerAmntBtnFirstTwo.length; i++) {
  wagerAmntBtnFirstTwo[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("wagerAmoActive");
  current[0].className = current[0].className.replace(" wagerAmoActive", "");
  this.className += " wagerAmoActive";
  });
}

for (var j = 0; j < wagerAmntBtnSecondTwo.length; j++) {
  wagerAmntBtnSecondTwo[j].addEventListener("click", function() {
  var current = document.getElementsByClassName("wagerAmntActive");
  current[0].className = current[0].className.replace(" wagerAmntActive", "");
  this.className += " wagerAmntActive";
  });
}

for (var k = 0; k < wagerAmntBtnLastFour.length; k++) {
  wagerAmntBtnLastFour[k].addEventListener("click", function() {
  var current = document.getElementsByClassName("wagerAmtActive");
  current[0].className = current[0].className.replace(" wagerAmtActive", "");
  this.className += " wagerAmtActive";
  });
}