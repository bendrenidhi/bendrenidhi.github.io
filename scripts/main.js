let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  let newSrc;
  if (mySrc === 'images/zurich.png') {
    newSrc = 'images/london.jpeg';
  } else if (mySrc === 'images/london.jpeg') {
    newSrc = 'images/pune.jpeg';
  } else if (mySrc === 'images/pune.jpeg') {
    newSrc = 'images/stamford.jpeg';
  } else {
    newSrc = 'images/zurich.png';
  }

  myImage.setAttribute('src', newSrc);
}

let myButton = document.querySelector('button');
let myBody = document.body;
let myHeading = document.querySelector('h1');
let otherElements = document.querySelectorAll('p, li, a'); // Add other elements as needed

function rgbToHex(rgb) {
  // Convert RGB to hex
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
}

function fullColorHex(rgb) {
  // Get the full hex color representation
  let splitRgb = rgb.split("(")[1].split(")")[0];
  let colors = splitRgb.split(", ");
  let r = rgbToHex(colors[0]);
  let g = rgbToHex(colors[1]);
  let b = rgbToHex(colors[2]);
  return '#' + r + g + b;
}

function toggleColor(elements, newColor) {
  elements.forEach(element => {
    element.style.color = newColor;
  });
}

function switchMode() {
  // Get the current background color
  let currentBgColor = fullColorHex(window.getComputedStyle(myBody).getPropertyValue('background-color'));

  // Determine the new background color and text color based on the current state
  let newBgColor, newTextColor;
  if (currentBgColor === '#e6d8c7') {
    // If current background color is #e6d8c7, switch to dark mode
    newBgColor = '#0b1957';
    newTextColor = '#9eccfa';
  } else {
    // Otherwise, switch to light mode
    newBgColor = '#e6d8c7';
    newTextColor = '#0b1957';
  }

  // Set the new background color
  myBody.style.backgroundColor = newBgColor;

  // Toggle the text color for various elements
  toggleColor([myHeading, ...otherElements], newTextColor);
}

myButton.onclick = function() {
  switchMode();
}

