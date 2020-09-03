window.onload = function(){
  document.getElementById("scroll_button").onclick = function() {scrollToAboutMe()};

  function scrollToAboutMe() {
    console.log("hellooooo");
    document.getElementById("about me").scrollIntoView();
  }
}