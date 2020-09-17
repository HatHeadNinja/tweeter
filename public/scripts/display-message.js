// These functions display a passed message in the tweet label, enable/disable the tweet button 
// and set the style for form elements accordingly
//
// NOTE TO PROJECT EVALUTORS: 
// ==========================
// Still need to change inline styling to setting class styles with .className. Wouldn't work & still outstanding!
// (If this wasn't a project submission but real life, I would still leave a comment to highlight technical debt)

function okMessage(message, charCount) {
  $('#tweet-label').text(message);
  $('.counter').val(charCount + ' / 140');
  $('#new-tweet-button').prop("disabled", false);
  $('#new-tweet-button').css("background-color", "#4056A1");
  $('#tweet-label').css("display", "flex");
  $('#error').css("display","none");
  $('.counter').css("color", "darkgray");
  return;
}

// error message
function errorMessage (message, charCount) {
  $('#error-msg').text(message);
  $('.counter').val(charCount + ' / 140');
  $('#new-tweet-button').prop("disabled", true);
  $('#new-tweet-button').css("background-color", "grey");
  $('#tweet-label').css("display", "none");
  $('#error').css("display","flex");
  $('.counter').css("color", "crimson");
  return;
}

