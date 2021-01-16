// -------- THIS IS THE CODE THAT MAKES THE SVG GRADIENT APPEAR ON CLICK, IN MOUSE COORDINATES -------

// document.onclick = userClicked;
// function userClicked() {
// var x = event.clientX;
// var y = event.clientY;
// var touch = document.getElementById("spot2");
// touch.style.display = '';
// touch.style.position = 'absolute';
// touch.style.left = x + 'px';
// touch.style.top = y + 'px';



document.onclick = userClicked;
function userClicked() {
var x = event.pageX;
var y = event.pageY;
var touch = document.getElementById("spot2");
touch.style.display = '';
touch.style.position = 'absolute';
touch.style.left = x + 'px';
touch.style.top = y + 'px';
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
