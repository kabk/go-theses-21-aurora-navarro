// function myFunction() {
//   document.getElementById("landing").style.color = "red";
// }

// ------ THIS IS TO GET THE DISTANCE FROM THE ACTUAL TOP OF THE ENTIRE PAGE -------

// var getOffsetTop = function (elem) {
//
// 	// Set our distance placeholder
// 	var distance = 0;
//
// 	// Loop up the DOM
// 	if (elem.offsetParent) {
// 		do {
// 			distance += elem.offsetTop;
// 			elem = elem.offsetParent;
// 		} while (elem);
// 	}
//
// 	// Return our distance
// 	return distance < 0 ? 0 : distance;
// };
//
// // Example
// var elem = document.querySelector('#some-element');
// var offset = getOffsetTop(elem);

// -------- THIS IS THE CODE THAT MAKES THE SVG GRADIENT APPEAR ON CLICK, IN MOUSE COORDINATES -------

document.onclick = userClicked;
function userClicked() {
var x = event.clientX;
var y = event.clientY;
var touch = document.getElementById("spot2");
touch.style.display = '';
touch.style.position = 'absolute';
touch.style.left = x + 'px';
touch.style.top = y + 'px';
// if (touch.style.display === "none") {
//   touch.style.display = "absolute";
// } else {
//   touch.style.display = "none";
// }
}
