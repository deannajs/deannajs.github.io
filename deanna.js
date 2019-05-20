function openTab(event, tabname) {
  // var i, tabcontent, tablinks;
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].innerHTML = "";
  }
  // tablinks = document.getElementsByClassName("tablinks");
  // for (i = 0; i < tablinks.length; i++) {
  //   tablinks[i].className = tablinks[i].className.replace(" active", "");
  // }
  // document.getElementById(tabname).style.display = "block";
  // evt.currentTarget.className += " active";
}