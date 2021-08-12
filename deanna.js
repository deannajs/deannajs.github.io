window.onload = function() {
  startTyping();

  var body = document.body,
      html = document.documentElement;

  var height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
  var navbar = document.getElementById('navbar');
  navbar.style.backgroundSize = "100% " + height + "px";

  document.getElementById('scroll_button').marginTop 
}

window.onscroll = function() {
  updateScrollProgress();
  updateNavbarColor();
  fadeIn();
}

function fadeIn() {
  var profilepic = document.getElementById("profilepic");

  var bottom_of_object = profilepic.position().top + profilepic.outerHeight();
  var bottom_of_window = window.scrollTop() + window.height();

  /* If the object is completely visible in the window, fade it it */
  if (bottom_of_window > bottom_of_object) {

      profilepic.animate({
          'opacity': '1'
      }, 500);

  }
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

  // find size of window
  var windowHeight = window.innerHeight;

  // calculate position to scroll to
  var offsetPosition = elementPosition - headerOffset - windowHeight / 4;

  window.scrollTo({top: offsetPosition, behavior: "smooth", inline: 'center', block: 'center'});
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}

// https://stackoverflow.com/questions/29975246/bootstrap-navbar-inherit-a-gradient-color-of-parent
// Essentially what's going on here is the .navbar gets the same gradient backgorund, and it's position is changed/moved with the window scrolling.
function updateNavbarColor() {
  // get current position from top
  var scr = document.documentElement.scrollTop;
	
  var navbar = document.getElementById('navbar');
  navbar.style.backgroundPosition = "0px -" + scr + "px";
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
    var strings = ["playing piano & cello...", "bell towers..." ,"film photography..." ,"bullet journaling + cute stationery...", "pigs :(:)..." ,"binge watching tv shows..." , "emptying my head of thoughts...", "nintendo games...", "watching cafe vlogs..."]
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



function expandSkillsBox() {
  var coll = document.getElementsByClassName("skills_expand_button");
  var i;
  
  for (var i = 0; i < coll.length; i++) {
    var content = coll[i].nextElementSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  }
}

