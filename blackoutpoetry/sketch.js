var evening_solace;

var inputWord = "";
var updatedWord = "";

function preload() {
  evening_solace = loadStrings("evening_solace.txt");
}

function setup() {
   output = select("#output");
  // createButton("Go").mousePressed(blackout);

//}

//function blackout(){
  var r = /(\W+)/;
  var newText = [];

  for (var i = 0; i < evening_solace.length; i++) {
    append(newText, evening_solace[i].split(r));
  }

  for (var i = 0; i < newText.length; i++) {
    for (var j = 0; j < newText[i].length; j++) {
      var span = createSpan(newText[i][j]);
      span.parent(output);
      span.style("background-color", "#000");
      if (!/W+/.test(newText[i][j])){
        span.mousePressed(hideorrevealText);
      }
    }
    var span2 = createSpan("<br>");
    span2.parent(output);
  }
 }


function hideorrevealText(){
//  if (mouseButton === LEFT) {
  this.style("background-color", "#FFF");
//} else if (mouseButton === RIGHT){
//  this.style("background-color", "#000");
//}
}
