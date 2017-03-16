var Google = require("./../js/google.js").googleModule;
var apiKey = require("./../.env").apiKey;

$(document).ready(function() {
  var currentGoogle = new Google();
  $('#google-form').submit(function() {
    event.preventDefault();
    var input = $('#google-input').val().toLowerCase();
    currentGoogle.getGoogle(input);
  });
});
