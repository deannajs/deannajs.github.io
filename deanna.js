window.onload = function(){
  document.getElementById("scroll_button").onclick = function() {scrollToAboutMe()};

  function scrollToAboutMe() {
    document.getElementById("about me").scrollIntoView({behavior: "smooth", block: "center"});
  }
}

window.onscroll = function() {updateScrollProgress()};

function updateScrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
          
      var bottom_of_object = $(".section_header").position().top + $(".section_header").outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){
          $("#navbar").fadeIn();
      } else {
        $("#navbar").fadeOut();

      }
          
  
  });
  
});