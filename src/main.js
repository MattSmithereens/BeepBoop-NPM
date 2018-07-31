import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Beep } from './scripts.js';

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
    $("#output").text("");
      var makeInt = parseInt($("#inputString").val());
      var newBeep = new Beep(makeInt, displayResults);
      newBeep.tooBig();

  });

  $("#reset").click(function(e) {
    e.preventDefault();
    location.reload();
  })
});

function displayResults(i) {
  $("#output").append("<li>" + i + "</li>");
};
