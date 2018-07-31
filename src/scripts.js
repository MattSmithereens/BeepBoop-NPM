export function Beep(number, displayResults) {
  this.number = number;
  this.displayResults = displayResults;
}


Beep.prototype.tooBig = function() {
  if (this.number > 30) {
    this.displayResults("You're being unreasonable, Dave.  That number is too large");
  } else {
    this.countDown(this.number);
  }
};

Beep.prototype.countDown = function() {
  for (var i = this.number; i >= 0; i -= 1) {
    this.numCheck(i);
  }
};

Beep.prototype.numCheck = function(i) {
  var divThree = i%3 === 0 ;
  var stringI = i.toString();
  var splitNumber = stringI.split("");
  var oneYes = splitNumber.includes("1");
  var zeroYes = splitNumber.includes("0");
  if (divThree === true && i > 1) {
    this.displayResults("I'm sorry, Dave. I'm afraid I can't do that.");
  } else if (oneYes === true) {
    this.displayResults("BOOP");
  } else if (zeroYes === true) {
    this.displayResults("BEEP");
  } else {
    this.displayResults(i);
  }
};
