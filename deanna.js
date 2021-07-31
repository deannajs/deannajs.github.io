window.onload = function() {
  // document.getElementById("scroll_button").onclick = scrollToId('about me');
  startTyping();
}

window.onscroll = function() {
  updateScrollProgress();
  // updateBackgroundColor();
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

function updateBackgroundColor() {
  var element = document.getElementById("navbar");
  var bodyBackgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background');
  console.log("background color type is ", typeof(bodyBackgroundColor));
  console.log("background color is ", bodyBackgroundColor);
  console.log("background color element 0 is ", bodyBackgroundColor[0]);
  element.style.backgroundColor = bodyBackgroundColor;
}

// https://stackoverflow.com/questions/29975246/bootstrap-navbar-inherit-a-gradient-color-of-parent
// Essentially what's going on here is the .navbar gets the same gradient backgorund, and it's position is changed/moved with the window scrolling.
function updateNavbarColor() {
  // get current position from top
  var scr = getScrollTop();
  // var scr = window.scrollY;
  var navbar = document.getElementById('navbar');
  navbar.backgroundPosition = "0px - " + scr + "px";
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
  console.log('typing got called!')

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
          backspace(strings, curStringIdx, curStrPos);
        }, 30);

        // check if this is the last string in the array
        if (curStringIdx == strings.length-1) {
          curStringIdx = 0;
        } else {
          curStringIdx++;
        }
        curStrPos = 0;

      } else {
        // add the next char into the existing string
        content.innerHTML = curString.substr(0, curStrPos+1);

        // add one char at a time
        curStrPos++;

        // loop the function
        typewrite(strings, curStringIdx, curStrPos);
      }

    })
  }, 30)
}

function backspace(strings, curStringIdx, curStrPos){ 
    var content = document.getElementById('typing');

    setTimeout(function() {
      var curString = strings[curStringIdx];

      if (curStrPos < 0) {
        content.innerHTML = "";
        return;
      }
      
      content.innerHTML = curString.substr(0, --curStrPos);
      backspace(strings, curStringIdx, curStrPos);
    }, 30)

}


// $(document).ready(function(){
//   $(window).scroll(function(e){
//       var scr = $(window).scrollTop();
//       $('#navbar').css('background-position', '0px -'+ scr+'px');
//   });    
// });

