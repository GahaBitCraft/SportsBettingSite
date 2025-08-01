var state = false;
function toggle() {
    if(state) {
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye-wrapper").style.boxShadow = '0 0 0 0px #D6D6D6';
        document.getElementById("open").style.display= 'none';
        document.getElementById("close").style.display= 'block';
        state = false;
    } else {
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye-wrapper").style.boxShadow = '0 0 0 0px #000000';
        document.getElementById("open").style.display= 'block';
        document.getElementById("close").style.display= 'none';
        state = true;
    }
}

function toggleS() {
    if(state) {
        document.getElementById("password-s").setAttribute("type","password");
        document.getElementById("eye-wrapper-s").style.boxShadow = '0 0 0 0px #D6D6D6';
        document.getElementById("open-s").style.display= 'none';
        document.getElementById("close-s").style.display= 'block';
        state = false;
    } else {
        document.getElementById("password-s").setAttribute("type","text");
        document.getElementById("eye-wrapper-s").style.boxShadow = '0 0 0 0px #000000';
        document.getElementById("open-s").style.display= 'block';
        document.getElementById("close-s").style.display= 'none';
        state = true;
    }
}

function toggleSS() {
    if(state) {
        document.getElementById("password-ss").setAttribute("type","password");
        document.getElementById("eye-wrapper-ss").style.boxShadow = '0 0 0 0px #D6D6D6';
        document.getElementById("open-ss").style.display= 'none';
        document.getElementById("close-ss").style.display= 'block';
        state = false;
    } else {
        document.getElementById("password-ss").setAttribute("type","text");
        document.getElementById("eye-wrapper-ss").style.boxShadow = '0 0 0 0px #000000';
        document.getElementById("open-ss").style.display= 'block';
        document.getElementById("close-ss").style.display= 'none';
        state = true;
    }
}

function boxFocus() {
    document.getElementById("eye-wrapper").style.background = '#ffffff';
}

function boxUnFocus() {
    document.getElementById("eye-wrapper").style.background = '#201F3F';
}

function boxFocusS() {
    document.getElementById("eye-wrapper-s").style.background = '#ffffff';
}

function boxUnFocusS() {
    document.getElementById("eye-wrapper-s").style.background = '#201F3F';
}

function boxFocusSS() {
    document.getElementById("eye-wrapper-ss").style.background = '#ffffff';
}

function boxUnFocusSS() {
    document.getElementById("eye-wrapper-ss").style.background = '#201F3F';
}

function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.drop')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementsByTagName("BODY").style.background = "#ffffff";
      }
    }
  }
}


var lotteries = document.getElementById('lottriesSec');
var lottBtns = lotteries.getElementsByClassName("lotteryButton");
for (var i = 0; i < lottBtns.length; i++) {
    lottBtns[i].addEventListener("click", function() {
    var currentLottBtn = document.getElementsByClassName("lottBtnActive");
    currentLottBtn[0].className = currentLottBtn[0].className.replace(" lottBtnActive", "");
    this.className += " lottBtnActive";
    this.innerHTML = "Selected";
    this.style.border = "1px solid #ffffff";

    var selectedLottBtn = document.getElementsByClassName("lotteryButton lottBtnActive");
    var selectedLottBtnValue = selectedLottBtn[0].value;
    
    var unSelectedLottBtn = lotteries.getElementsByClassName("lotteryButton");
    for(i = 0; i < unSelectedLottBtn.length; i++) {
        if(unSelectedLottBtn[i].getAttribute('class') != "lotteryButton lottBtnActive") {
            unSelectedLottBtn[i].textContent = "Select";
            unSelectedLottBtn[i].style.border = "1px solid #ACDD49";
        }
    }

    console.log(selectedLottBtnValue);
  });
}


function openMobileMenu() {
  document.getElementById("mobileMenu").style.width = "100%";
}

function closeMobileMenu() {
  document.getElementById("mobileMenu").style.width = "0";
}