console.log( "Ready" );

function scrollPosition() {

  var scrollY = window.scrollY;
  console.log(scrollY);

  var objectPos = Math.floor(document.getElementById('s1').getBoundingClientRect().top + scrollY);
  console.log("objectPos: " + objectPos);

  var temp = scrollY + objectPos - 10;
  console.log("scrollPos: " + temp);

  if(objectPos > temp - 10 && objectPos < temp + 10){
    console.log("tada");
    // document.getElementById('s1').style.webkitAnimation = "slidein 2s";

    show();
  }

  // return (scrollY);

}

function show() {
  var elem = document.getElementById("white");
  var posTop = 0;
  var id = setInterval(frame, 7);

  function frame() {
    if (posTop == 500) {
      clearInterval(id);
      elem.style.visibility = "hidden";
    }
    else {
      posTop += 2;
      elem.style.top = posTop + 'px';
    }
  }
}


//
// function getY(elem) {
//
//   var scrollY = scrollPosition();
//
//   var relativePos = elem.getBoundingClientRect().top;
//
//   var objectPos = relativePos + scrollY;
//
//   // var objectPos = document.getElementById('s1').offsetTop;
//   console.log(objectPos + "YES");
//
//   if (scrollY == objectPos) {
//     console.log("they are same");
//   }
// }

















// window.onload = loadScreen();
//
// function loadScreen() {
//
//   for (var i=1;i<17;i++){
//     var panel = document.createElement('div');
//     document.body.appendChild(panel);
//
//     panel.style.height = "500px";
//     panel.style.width = "800px";
//     panel.style.marginBottom = "200px";
//     panel.style.marginLeft = "auto";
//     panel.style.marginRight = "auto";
//     // panel.style.setAttribute = ('align', 'center');
//
//     panel.style.backgroundImage = "url('img/" + i + "_resized.jpg')";
//   }
//
// }
//
// console.log( "Done" );
