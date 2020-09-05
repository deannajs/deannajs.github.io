window.onload = function(){
  document.getElementById("scroll_button").onclick = function() {scrollToAboutMe()};

  function scrollToAboutMe() {
    document.getElementById("about me").scrollIntoView({behavior: "smooth", block: "nearest"});
  }
}

window.onscroll = function() {updateScrollProgress()};

function updateScrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}