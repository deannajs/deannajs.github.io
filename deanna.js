window.onload = function() {
  // document.getElementById("scroll_button").onclick = scrollToId('about me');
}

window.onscroll = function() {
  updateScrollProgress();
  updateBackgroundColor();
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

  // find offset from top of page by going through offsetParent
  var elementPosition = 0;
  var curr_element = element;
  var offsetFromParent = curr_element.offsetParent;
  while (offsetFromParent > 0) {
    elementPosition += offsetFromParent;
    curr_element = curr_element.parentElement;
    offsetFromParent = curr_element.offsetParent;
  }
  var offsetPosition = elementPosition - headerOffset;

  window.scrollTo({top: offsetPosition, behavior: "smooth"});
}

function updateBackgroundColor() {
  var element = document.getElementById("navbar");
  var bodyBackgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background');
  console.log("background color type is ", typeof(bodyBackgroundColor));
  console.log("background color is ", bodyBackgroundColor);
  console.log("background color element 0 is ", bodyBackgroundColor[0]);
  element.style.backgroundColor = bodyBackgroundColor;
}