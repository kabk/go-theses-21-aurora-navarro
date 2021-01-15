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



// var elem = document.getElementsById("spot2")[0];
// var clone = elmnt.cloneNode(true);
// document.body.appendChild(cln);

// let spot2 = document.getElementById("spot2")
// let spotclone = spot2.cloneNode(true)

// touch.style.left = xPosition + 'px';
// touch.style.top = yPosition + 'px';


// touch.style.left = xPosition;
// touch.style.top = yPosition;

// touch.style.top = offset;
// if (touch.style.display === "none") {
//   touch.style.display = "absolute";
// } else {
//   touch.style.display = "none";
// }
}
