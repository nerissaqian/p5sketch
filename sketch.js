var adeh_wishes;
var annabel_lee;
var evening_solace;
var tamerlane;

var output;
var poem;
var inputWord = "";
var updatedWord = "";

function preload() {
  aedh_wishes = loadStrings("aedh_wishes.txt");
  annabel_lee = loadStrings("annabel_lee.txt");
  evening_solace = loadStrings("evening_solace.txt");
  tamerlane = loadStrings("tamerlane.txt");
}

function setup() {

  var aedhButton = select("#aedh_wishes");
  aedhButton.mousePressed(aedhWishes);
  var annabelButton = select("#annabel_lee");
  annabelButton.mousePressed(annabelLee);
  var eveningButton = select("#evening_solace");
  eveningButton.mousePressed(eveningSolace);
  var tamerlaneButton = select("#tamerlane");
  tamerlaneButton.mousePressed(tamerLane);

  var submitButton = select("#submit");
  submitButton.mousePressed(submit);

  output = select("#output");

  var blackoutButton = select("#blackout");
  blackoutButton.mousePressed(blackout);
  var whiteoutButton = select("#whiteout");
  whiteoutButton.mousePressed(whiteout);
}

function aedhWishes() {
  poem = aedh_wishes;
  generate();
}

function annabelLee() {
  poem = annabel_lee;
  generate();
}

function eveningSolace() {
  poem = evening_solace;
  generate();
}

function tamerLane() {
  poem = tamerlane;
  generate();
}

function generate() {
  var r = /(\W+)/;
  var newText = [];
  for (var i = 0; i < poem.length; i++) {
    append(newText, poem[i].split(r));
  }

  // for (var i = 0; i < newText.length; i++) {
  //   for (var j = 0; j < newText[i].length; j++) {
  //     var span = createSpan(newText[i][j]);
  //     span.parent(output);
  //     if (!/W+/.test(newText[i][j])){
  //       span.mousePressed(replaceText);
  //     }
  //   }
  //   var span2 = createSpan("<br>");
  //   span2.parent(output);
  // }




  var displayText = "";
  for (i = 0; i < newText.length; i++){
    displayText += join(newText[i],"") + "<br>"
  }
  output.html(displayText);
}

function whiteout(){
  var r = /(\W+)/;
  var newText = [];
  for (var i = 0; i < poem.length; i++) {
    append(newText, poem[i].split(r));
  }
  for (var i = 0; i < newText.length; i++) {
    for (var j = 0; j < newText[i].length; j++) {
      var span = createSpan(newText[i][j]);
      span.parent(output);
      span.style("background-color", "#000");
      if (!/W+/.test(newText[i][j])){
        span.mousePressed(revealText);
      }
    }
    var span2 = createSpan("<br>");
    span2.parent(output);
  }
}

function blackout(){
  var r = /(\W+)/;
  var newText = [];
  for (var i = 0; i < poem.length; i++) {
    append(newText, poem[i].split(r));
  }
  for (var i = 0; i < newText.length; i++) {
    for (var j = 0; j < newText[i].length; j++) {
      var span = createSpan(newText[i][j]);
      span.parent(output);
    //  span.style("background-color", "#000");
      if (!/W+/.test(newText[i][j])){
        span.mousePressed(hideText);
      }
    }
    var span2 = createSpan("<br>");
    span2.parent(output);
  }
}

function revealText(){
  this.style("background-color", "#FFF");
}

function hideText(){
  this.style("background-color", "#000");
}
