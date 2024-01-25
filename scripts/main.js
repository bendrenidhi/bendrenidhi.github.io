let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '/Users/nidhibendre/Documents/ds4200/hw1/firefox.jpeg') {
    myImage.setAttribute ('src','/Users/nidhibendre/Documents/ds4200/hw1/firefox2.jpeg');
  } else {
    myImage.setAttribute ('src','/Users/nidhibendre/Documents/ds4200/hw1/firefox.jpeg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}