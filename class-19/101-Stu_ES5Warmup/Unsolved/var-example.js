log(name); // output: Line 1: undefined

var tinyize = function(name) {
  log(name); // output: Line 3: Undefinded

  log(myName); // output: Line 5: undefined
  var myName = "Tiny " + name + "!";
  log(myName); // output: Line 7: Tiny !

  return myName;
};

var name = tinyize("Rick"); //redo tinyize output
log(name); // output: Tiny Rick!
log(myName); // output: null breaks execution

log(i); // output: undefined
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 5 five times
  }, 100);
}
log(i); // output: 5

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
