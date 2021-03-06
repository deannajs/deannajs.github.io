window.onload() = function() {
  document.getElementById("scroll_button").onclick = scrollToAboutMe;

  function scrollToAboutMe() {
    console.log("scrolling to about me");
    var element = document.getElementById("about me");
    var headerOffset = 13;
    var elementPosition = element.offsetTop();
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({top: offsetPosition, behavior: "smooth"})
  }
}

window.onscroll = function() {updateScrollProgress()};

function updateScrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function scrollTo(sectionName) {
  document.getElementById(sectionName);

}
