window.onload = function() {
  startTyping();

  var body = document.body,
      html = document.documentElement;

  var height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
  var navbar = document.getElementById('navbar');
  navbar.style.backgroundSize = "100% " + height + "px";

  // initCarousel();
}

window.onscroll = function() {
  updateScrollProgress();
  updateNavbarColor();
  // fadeIn();
}

// function fadeIn() {
//   var profilepic = document.getElementById("profilepic");

//   var bottom_of_object = profilepic.position().top + profilepic.outerHeight();
//   var bottom_of_window = window.scrollTop() + window.height();

//   /* If the object is completely visible in the window, fade it it */
//   if (bottom_of_window > bottom_of_object) {
//     profilepic.classList.add('anim');
//   }
// }

function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

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

function expandSkillsBox(buttonIdx) {
  var button = document.getElementsByClassName("skills_expand_button")[buttonIdx];
  var content = button.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    button.innerHTML = "+";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    button.innerHTML = "-";
  } 

}

function initCarousel() {
  var num_visible = 3;
  var currSlideIdxs = [];
  for (var i = 0; i < num_visible; i++) {
    currSlideIdxs.push(i);
  }
  var carousels = document.getElementsByClassName("skills_smaller_container");

  for (var i = 0; i < carousels.length; i++) {
    var slides = carousels[i].getElementsByClassName("skills_smaller_box");

    // hide every other one
    for (var j = 0; j < slides.length; j++) {
      if (currSlideIdxs.includes(j)) {
        slides[j].style.display = 'grid';
      }
      else {
        slides[j].style.display = 'none';
      }
    }

    // assign grid-column positions
    for (var j=0; j < currSlideIdxs.length; j++) {
      slides[currSlideIdxs[j]].style.gridColumn = j + 2; // starts at 1, and first column is left arrow
    }
  }
  
}


function rightCarousel(idx) {
  var num_visible = 3;
  var slides = document.getElementsByClassName("skills_smaller_container")[idx].getElementsByClassName("skills_smaller_box");

  // get idx of current slide
  var currFirstSlideIdx;
  for (var i=0;  i < slides.length; i++) {
    if (slides[i].classList.contains("current_slide")) {
      currFirstSlideIdx = i;
    }
  }

  // get list of current slides showing
  var currSlideIdxs = [];
  for (var i = 0; i < num_visible; i++) {
    currSlideIdxs.push(mod(currFirstSlideIdx + i, slides.length));
  }

  // get list of next slides to show
  var nextSlideIdxs = [];
  for (var i = 0; i < currSlideIdxs.length; i++) {
    nextSlideIdxs.push(mod(currSlideIdxs[i] + 1, slides.length));
  }

  // remove current slide from current slide
  // add current slide to next slide
  // move the slide....
  var currSlide = slides[currFirstSlideIdx];
  var nextSlide = slides[mod(currFirstSlideIdx + 1,slides.length)];

  currSlide.classList.remove('current_slide');
  nextSlide.classList.add('current_slide');

  // transition
  // find out amount to move
  var amountToMove = slides[0].getBoundingClientRect.width;
  // transform each current one
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'translateX(-' + amountToMove + ')';
  }

  // show slides
  showSlides(slides, nextSlideIdxs);
}

// function leftCarousel(idx) {
//   var num_visible = 3;
//   var slides = document.getElementsByClassName("skills_smaller_container")[idx].getElementsByClassName("skills_smaller_box");

//   // get idx of current slides
//   var currFirstSlideIdx;
//   for (var i=0;  i < slides.length; i++) {
//     if (slides[i].classList.contains("current_slide")) {
//       currFirstSlideIdx = i;
//     }
//   }

//   // get list of curr slides showign
//   var currSlideIdxs = [];
//   for (var i = 0; i < num_visible; i++) {
//     currSlideIdxs.push(mod(currFirstSlideIdx + i, slides.length));
//   }

//   // get list of next slides to show
//   var nextSlideIdxs = [];
//   for (var i = 0; i < currSlideIdxs.length; i++) {
//     nextSlideIdxs.push(mod(currSlideIdxs[i] - 1, slides.length));
//   }

//   // remove current slide from current slide
//   // add current slide to next slide
//   var currSlide = slides[currFirstSlideIdx];
//   var nextSlide = slides[mod(currFirstSlideIdx - 1, slides.length)];

//   currSlide.classList.remove('current_slide');
//   nextSlide.classList.add('current_slide');

//   // transition
//   // find out amount to move
//   var amountToMove = slides[0].getBoundingClientRect.width;
//   console.log(amountToMove);
//   // transform each current one
//   for (var i = 0; i < currSlideIdxs.length; i++) {
//     slides[currSlideIdxs[i]].style.transform = 'translateX(' + amountToMove + ')';
//   }

//   // show slides
//   showSlides(slides, nextSlideIdxs);
// }

function leftCarousel(idx) {
  var carousel = document.getElementsByClassName('carousel')[idx];
  var slides = carousel.getElementsByClassName('skills_smaller_box');
  var amountToTransform = carousel.getElementsByClassName('skills_smaller_box current_slide')[0].getBoundingClientRect().width;
  console.log(amountToTransform);

  // get idx of current slides
  var currFirstSlideIdx;
  for (var i=0;  i < slides.length; i++) {
    if (slides[i].classList.contains("current_slide")) {
      currFirstSlideIdx = i;
    }
  }

  // remove current slide from current slide
  // add current slide to next slide
  var currSlide = slides[currFirstSlideIdx];
  var nextSlide = slides[mod(currFirstSlideIdx - 1, slides.length)];

  currSlide.classList.remove('current_slide');
  nextSlide.classList.add('current_slide');

  // transform
  carousel.style.transform = 'translateX(-' + amountToTransform * currFirstSlideIdx + ')';

}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function showSlides(slides, nextSlideIdxs) {
  // hide every other one
  for (var i =0; i < slides.length; i++) {
    if (nextSlideIdxs.includes(i)) {
      slides[i].style.display = 'grid';
    }
    else {
      slides[i].style.display = 'none';
    }
    slides[i].style.transform = '';
  }

  // assign grid-column positions
  for (var i=0; i < nextSlideIdxs.length; i++) {
    slides[nextSlideIdxs[i]].style.gridColumn = i + 2; // starts at 1, and first column is left arrow
  }
}

