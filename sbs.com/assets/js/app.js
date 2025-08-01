var backButton = document.getElementById('goBackTo');

var selectSportAndMatchup = document.getElementById('SelectSportAndMatchup');
var selectWagerAmount = document.getElementById('nextToSelectWagerAmount');
var chooseYourBet = document.getElementById('nextToChooseYourBet');
var chooseYourPaymentMethod = document.getElementById('nextToChooseYourPaymentMethod');
var payWagerAmount = document.getElementById('nextToPayWagerAmount');

selectWagerAmount.style.display = "none";
chooseYourBet.style.display = "none";
chooseYourPaymentMethod.style.display = "none";
payWagerAmount.style.display = "none";

function moveTo(locationName) {
	console.log(locationName);
	var location = "nextTo" + locationName;
	console.log(location);

	if (location == "nextToSelectWagerAmount") {
		selectWagerAmount.style.display = "block";
		selectSportAndMatchup.style.display = "none";

		document.getElementById("selectSportAndMatchup").addEventListener("click", function(event){
		  event.preventDefault()
		});

		var progress = document.getElementById('prog-2');
		var progressChildElems = progress.children;
		var progNumber = progressChildElems[0];
		var progTitle = progressChildElems[1];
		progNumber.classList.add("active");
		progTitle.classList.add("active");

		document.getElementById('backBtn').style.display = "block";

		backButton.id = "goBackToSelectSportAndMatchup";

		getData();
	} else if (location == "nextToChooseYourBet") {
		chooseYourBet.style.display = "block";
		selectWagerAmount.style.display = "none";
		selectSportAndMatchup.style.display = "none";
		document.getElementById("selectWagerAmount").addEventListener("click", function(event){
		  event.preventDefault()
		});

		var progress = document.getElementById('prog-3');
		var progressChildElems = progress.children;
		var progNumber = progressChildElems[0];
		var progTitle = progressChildElems[1];
		progNumber.classList.add("active");
		progTitle.classList.add("active");

		backButton.id = "goBackToSelectWagerAmount";

		getData();
	} else if (location == "nextToChooseYourPaymentMethod") {
		chooseYourPaymentMethod.style.display = "block";
		chooseYourBet.style.display = "none";
		selectSportAndMatchup.style.display = "none";
		document.getElementById("chooseYourBet").addEventListener("click", function(event){
		  event.preventDefault()
		});

		var progress = document.getElementById('prog-4');
		var progressChildElems = progress.children;
		var progNumber = progressChildElems[0];
		var progTitle = progressChildElems[1];
		progNumber.classList.add("active");
		progTitle.classList.add("active");

		backButton.id = "goBackToChooseYourBet";

		getData();
	} else if (location == "nextToPayWagerAmount") {
		payWagerAmount.style.display = "block";
		chooseYourPaymentMethod.style.display = "none";
		selectSportAndMatchup.style.display = "none";
		document.getElementById("chooseYourPaymentMethod").addEventListener("click", function(event){
		  event.preventDefault()
		});

		document.getElementById('progressbar').style.display = "none";

		backButton.id = "goBackToChooseYourPaymentMethod";

		getData();
	}
}

function moveBack(backToLocation) {
	var previousTabName = backToLocation;
	console.log(previousTabName);

	if (previousTabName == "goBackToSelectSportAndMatchup") {
		selectSportAndMatchup.style.display = "block";
		selectWagerAmount.style.display = "none";

		document.location.reload();
		document.getElementById('backBtn').style.display = "none";

		var progress = document.getElementById('prog-2');
		var progressChildElems = progress.children;
		var progNumber = progressChildElems[0];
		var progTitle = progressChildElems[1];
		progNumber.classList.remove("active");
		progTitle.classList.remove("active");

	} else if (previousTabName == "goBackToSelectWagerAmount") {
		selectWagerAmount.style.display = "block";
		chooseYourBet.style.display = "none";
		selectSportAndMatchup.style.display = "none";
		backButton.id = "goBackToSelectSportAndMatchup";

		var progress = document.getElementById('prog-3');
		var progressChildElems = progress.children;
		var progNumber = progressChildElems[0];
		var progTitle = progressChildElems[1];
		progNumber.classList.remove("active");
		progTitle.classList.remove("active");

	} else if (previousTabName == "goBackToChooseYourBet") {
		chooseYourBet.style.display = "block";
		chooseYourPaymentMethod.style.display = "none";
		selectSportAndMatchup.style.display = "none";
		backButton.id = "goBackToSelectWagerAmount";

		var progress = document.getElementById('prog-4');
		var progressChildElems = progress.children;
		var progNumber = progressChildElems[0];
		var progTitle = progressChildElems[1];
		progNumber.classList.remove("active");
		progTitle.classList.remove("active");

	} else if (previousTabName == "goBackToChooseYourPaymentMethod") {
		chooseYourPaymentMethod.style.display = "block";
		payWagerAmount.style.display = "none";
		selectSportAndMatchup.style.display = "none";
		backButton.id = "goBackToChooseYourBet";

		document.getElementById('progressbar').style.display = "block";
	}
}

function getBackTo(location) {
	var previousTabName = location;
	console.log(previousTabName);

	if (previousTabName == "getBackToSelectSportAndMatchup") {
		selectSportAndMatchup.style.display = "block";
		selectWagerAmount.style.display = "none";

		document.location.reload();
		document.getElementById('backBtn').style.display = "none";

		var progress = document.getElementById('prog-2');
		var progressChildElems = progress.children;
		var progNumber = progressChildElems[0];
		var progTitle = progressChildElems[1];
		progNumber.classList.remove("active");
		progTitle.classList.remove("active");

	} else if (previousTabName == "getBackToSelectWagerAmount") {
		selectWagerAmount.style.display = "block";
		chooseYourBet.style.display = "none";
		selectSportAndMatchup.style.display = "none";
		backButton.id = "goBackToSelectSportAndMatchup";

		var progress = document.getElementById('prog-3');
		var progressChildElems = progress.children;
		var progNumber = progressChildElems[0];
		var progTitle = progressChildElems[1];
		progNumber.classList.remove("active");
		progTitle.classList.remove("active");

	} else if (previousTabName == "getBackToChooseYourBet") {
		chooseYourBet.style.display = "block";
		chooseYourPaymentMethod.style.display = "none";
		selectSportAndMatchup.style.display = "none";
		backButton.id = "goBackToSelectWagerAmount";

		var progress = document.getElementById('prog-4');
		var progressChildElems = progress.children;
		var progNumber = progressChildElems[0];
		var progTitle = progressChildElems[1];
		progNumber.classList.remove("active");
		progTitle.classList.remove("active");

	} else if (previousTabName == "getBackToChooseYourPaymentMethod") {
		chooseYourPaymentMethod.style.display = "block";
		payWagerAmount.style.display = "none";
		selectSportAndMatchup.style.display = "none";
		backButton.id = "goBackToChooseYourBet";

		document.getElementById('progressbar').style.display = "block";
	}
}

function getData() {
    var sportElem = document.getElementsByName('sport');
    var matchupElem = document.getElementsByName('matchup');
    var wagerAmtElems = document.getElementById('wagerAmounts');
    var wagerAmtElem = wagerAmtElems.getElementsByClassName("amount");
    var betElem = document.getElementsByName('bet');
    var paymentElem = document.getElementsByName('payment');

    var sport;
    var matchup;
    var wagerAmt;
    var bet;
    var payment;

    for(i = 0; i < sportElem.length; i++) {
        if(sportElem[i].checked) {
        	var sport = sportElem[i].value;
        }
    }

    for(i = 0; i < matchupElem.length; i++) {
        if(matchupElem[i].checked) {
        	var matchup = matchupElem[i].value;
        }
    }

    for(i = 0; i < wagerAmtElem.length; i++) {
    	if(wagerAmtElem[i].getAttribute('class') == "amount wagerAmtActive") {
        	var wagerAmt = wagerAmtElem[i].textContent;
        }
    }

    for(i = 0; i < betElem.length; i++) {
        if(betElem[i].checked) {
        	var bet = betElem[i].value;
        }
    }

    for(i = 0; i < paymentElem.length; i++) {
        if(paymentElem[i].checked) {
        	var payment = paymentElem[i].value;
        }
    }

    console.log(sport + " & " + matchup + " & " + wagerAmt + " & " + bet + " & " + payment);
}

var boxBTC = document.getElementById('BTC');
var boxMKR = document.getElementById('MKR');
var boxUSDT = document.getElementById('USDT');

var convBTC = document.getElementById('convOfBTC');
var convMKR = document.getElementById('convOfMKR');
var convUSDT = document.getElementById('convOfUSDT');

boxMKR.style.display = "none";
boxUSDT.style.display = "none";

convMKR.style.display = "none";
convUSDT.style.display = "none";

function changeCrypto(evt, cryptoName) {
  var i, tabcontent, tablinks;
  var convOf = "convOf" + cryptoName;
  tabcontent = document.getElementsByClassName("ib");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].style.marginTop = "0";
  }

  convContent = document.getElementsByClassName("data");
  for (i = 0; i < convContent.length; i++) {
    convContent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("cryptoCurr");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cryptoName).style.display = "block";
  document.getElementById(convOf).style.display = "block";
  evt.currentTarget.className += " active";
}

function copyAddress(addrId) {
	var cryptoAddress = addrId.replace("cryptoAddr", "cryptoAddress");
	var copyText = document.getElementById(cryptoAddress);

	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	navigator.clipboard.writeText(copyText.value);
	  
	alert("Copied Wallet Address: " + copyText.value);
}