$(document).ready(function() {

  // process tweet character length passed from the tweet input listeners
  const charCounter = function(charCount) {
    
    if (charCount === 0) {
      $('.counter').val('0 / 140');
      // trying to change the class instead of style, can't make it work!
      // $('.counter').className = 'new-tweet div button';
      $('.counter').css("color", "darkgray");
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background-color", "grey");
      $('#tweet-label').css("display", "flex");
      $('#error').css("display","none");
    
    } else if (charCount > 0 && charCount < 141) {
      $('.counter').val(charCount + ' / 140');
      // trying to change the class instead of style but can't make it work!
      // $('.counter').className = 'counter';
      $('.counter').css("color", "darkgray");
      $('#new-tweet-button').prop("disabled", false);
      $('#new-tweet-button').css("background-color", "#4056A1");
      $('#tweet-label').css("display", "flex");
      $('#error').css("display","none");

    } else if (charCount >= 141) {
      charCount = 140 - charCount;
      $('.counter').val(charCount + ' / 140');
      $('.counter').css("color", "crimson");
      // trying to change the class instead of style but can't make it work!
      // $('.counter').className = 'error';
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background-color", "grey");
      $('#tweet-label').css("display", "none");
      $('#error').css("display","flex");
      $('#error-msg').val("&nbsp More than 140 characters! Try saying more with less...");
    
    // catch block for ajax
    } else {
      $('.counter').val(charCount + ' / 140');
      $('.counter').css("color", "crimson");
      // trying to change the class instead of style but can't make it work!
      // $('.counter').className = 'error';
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background-color", "grey");
      $('#tweet-label').css("display", "none");
      $('#error').css("display","flex");
      $('#error-msg').val("&nbsp The Internet is broken! Give it a shake!");
    }
  };
  
  // capture events in the tweet input and send tweet length to charCounter function
  $('#tweet-text').on('keydown', function() {
    const charCount = $(this).val().length;
    charCounter(charCount);
  });
  
  $('#tweet-text').on('keyup', function() {
    const charCount = $(this).val().length;
    charCounter(charCount);
  });
  
  $('#tweet-text').on('change', function() {
    const charCount = $(this).val().length;
    charCounter(charCount);
  });
  
  $('#tweet-text').on('blur', function() {
    const charCount = $(this).val().length;
    charCounter(charCount);
  });

});