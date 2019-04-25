var initialScroll = window.scrollY;
console.log("initialScroll: " + initialScroll);

var grab = [];
var objectPos = [];
var i = 1;

grab[0] = "null";
objectPos[0] = "null2";

for (; i < 16; i++){

  var source = "s" + i;

  grab[i] = document.getElementById(source);

  objectPos[i] = Math.floor(grab[i].getBoundingClientRect().top + initialScroll);
  console.log("current objectPos: "+ objectPos[i]);

}

window.onscroll = function scrollPosition() {

  var scrollY = window.scrollY;
  console.log("scrollY: " + scrollY);

  var received = [];
  received[0] = "null";

  for (var i = 1;i<16;i++){
    received[i] = objectPos[i];
  }

  temp = scrollY + objectPos[1] - 480;
  console.log("temp: " + temp);
  console.log("received[1]: " + received[1]);

  for (var i=1; i<16;i++)
  {
    if (received[i] > temp - 10 && received[i] < temp + 10){
      show(i);
    }
  }

}

function show(i) {

  var elem = document.getElementById("white" + i);

  var posTop = 0;
  var id = setInterval(frame, 5);

  function frame() {
    if (posTop == 500) {
      clearInterval(id);
      elem.style.visibility = "hidden";
    }

    else {
      posTop += 2;
      elem.style.top = posTop + 'px';
      elem.style.height -= '30vh';
    }
  }

}

function onclickOwl() {
  var elem = document.getElementById("owl");
  elem.style.visibility = "visible";
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 50) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.right = pos + pos + 'px';
    }
  }
}

function onclickBird() {
  var elem = document.createElement("img");
  elem.setAttribute("src","img/bird.png");

  elem.style.height = "auto";
  elem.style.width = "15vw";
  elem.style.position = "absolute";
  elem.style.top = "5vw";
  elem.style.left = "70vw";
  elem.style.border = "none";

  document.getElementById('birdpanel').appendChild(elem);
}

function onclickWheel() {
  var elem = document.createElement("img");
  elem.setAttribute("src","img/wheel.png");

  elem.style.height = "auto";
  elem.style.width = "10vw";
  elem.style.position = "absolute";
  elem.style.top = "15vw";
  elem.style.left = "18vw";
  elem.style.border = "none";

  document.getElementById('wheelpanel').appendChild(elem);
}

function onclickShovel() {
  var elem = document.getElementById('shovel');
  elem.src = "img/tractor.png";
  elem.style.width = "20vw";
  elem.style.height = "auto";
  elem.style.right = "20vw";
  elem.style.top = "20vh";
}

function onclick8() {
  document.getElementById('8panel').src = "img/8_later.jpg";
}
