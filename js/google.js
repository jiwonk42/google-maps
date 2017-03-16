function Google() {
}

Google.prototype.getGoogle = function(input) {
  console.log(input);
  $.get('https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap' + input).then(function(response) {
    $('#display-result').html("response ??? -> " + response + " <- ???");
  }).fail(function(error) {
    $("#display-result").text(error.responseJSON.message);
  });
};

exports.googleModule = Google;
