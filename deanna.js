
window.onload = function() {
  document.getElementById("scroll_button").onclick = scrollToAboutMe;
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

function scrollToAboutMe() {
  console.log("scrolling to about me");
  var element = document.getElementById("about me");
  // var headerOffset = document.getElementById("navbar").offsetHeight;
  var headerOffset = 0;
  var elementPosition = element.offsetTop;
  var offsetPosition = elementPosition - headerOffset;

  window.scrollTo({top: offsetPosition, behavior: "smooth"});
}

function scrollToId(idName) {
  console.log("scrolling to ", idName);
  var element = document.getElementById(idName);
  var headerOffset = document.getElementById("navbar").offsetHeight;
  var elementPosition = element.offsetTop;
  var offsetPosition = elementPosition - headerOffset;

  window.scrollTo({top: offsetPosition, behavior: "smooth"});
}

function updateBackgroundColor() {
  var element = document.getElementById("navbar");
  var bodyBackgroundColor = document.body.style.backgroundColor;
  console.log("background color is ", body);
  element.style.backgroundColor = bodyBackgroundColor;
}