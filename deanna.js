window.onload = function() {
  // document.getElementById("scroll_button").onclick = scrollToId('about me');
  startTyping();
  document.getElementById("navbar").backgroundSize = "100% " + document.height + "px";
}

window.onscroll = function() {
  updateScrollProgress();
  updateNavbarColor();
}

function updateScrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function scrollToId(idName) {
  var element = document.getElementById(idName);
  var headerOffset = document.getElementById("navbar").offsetHeight;

  // find offset from top of page
  var elementPosition = element.getBoundingClientRect().top + window.scrollY;

  var offsetPosition = elementPosition - headerOffset;

  window.scrollTo({top: offsetPosition, behavior: "smooth"});
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}

// https://stackoverflow.com/questions/29975246/bootstrap-navbar-inherit-a-gradient-color-of-parent
// Essentially what's going on here is the .navbar gets the same gradient backgorund, and it's position is changed/moved with the window scrolling.
function updateNavbarColor() {
  // get current position from top
  var scr = document.scrollTop;
  console.log('scr = ', scr);
	
  var navbar = document.getElementById('navbar');
  navbar.backgroundPosition = "0px -" + scr + "px";
  console.log('navbar bg pos = ', navbar.backgroundPosition);
  // console.log("backgroundposition is ", navbar.backgroundPosition)

}

function getScrollTop(){
  if(typeof pageYOffset != 'undefined') {
    return pageYOffset;
  }
  else {
    var B = document.body;
    var D = document.documentElement;
    D = (D.clientHeight) ? D : B;
    return D.scrollTop;
  }
}

function startTyping() {
  setTimeout(function() {
    var strings = ["playing piano & cello", "bell towers" ,"film photography" ,"bullet journaling" ,"cute stationery", "pigs" ,"anime and kdramas" ,"jamming out to music", "zoning out" ,"gudetama", "psyduck" ,"emptying my head of thoughts", "nintendo games","watching cafe vlogs"]
    typewrite(strings, 0, 0);
  }, 1000);
}

function typewrite(strings, curStringIdx, curStrPos) {
  setTimeout(function() {
    var content = document.getElementById('typing');
    // timeout for any pause after a character
    setTimeout(function() {
      var curString = strings[curStringIdx];

      // check if this is the last char in the curString
      if (curStrPos == curString.length) {

        // backspace
        setTimeout(function() {
			backspace(strings, curStringIdx, curStrPos)
		}, 1000);

      } else {
        // add the next char into the existing string
        content.innerHTML = curString.substr(0, curStrPos+1);

        // add one char at a time
        curStrPos++;
		  
		// loop the function        
		typewrite(strings, curStringIdx, curStrPos);
      }
    }, 50)
  }, 50)
}

function backspace(strings, curStringIdx, curStrPos){ 
    var content = document.getElementById('typing');

    setTimeout(function() {
      var curString = strings[curStringIdx];

      if (curStrPos < 0) {
        content.innerHTML = "";
		// check if this is the last string in the array
        if (curStringIdx == strings.length-1) {
          curStringIdx = 0;
        } else {
          curStringIdx++;
        }
		typewrite(strings, curStringIdx, 0);
		return;
      }
      
      content.innerHTML = curString.substr(0, --curStrPos);
      backspace(strings, curStringIdx, curStrPos);
    }, 50)

}

