export function Beep(number) {
  this.number = number;
}

Beep.prototype.tooBig = function() {
  if (this.number > 30) {
    displayResults("That number is too large");
    return false;
  } else {
    this.countDown(this.number);
    return true;
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
    displayResults("I'm sorry, Dave. I'm afraid I can't do that.");
  } else if (oneYes === true) {
    displayResults("BOOP");
  } else if (zeroYes === true) {
    displayResults("BEEP");
  } else {
    displayResults(i);
  }
};

function displayResults(i) {
  $("#output").append("<li>" + i + "</li>");
  $("#inputString").val("");
}
