$(document).ready(function() {
  
  // process tweet character length passed from the tweet input listeners
  const charCounter = function(charCount) {
  
  if (charCount < 141) {
    okMessage('What are you humming about?', charCount);

  } else if (charCount >= 141) {
    charCount = 140 - charCount;
    errorMessage('More than 140 characters! Try saying more with less...', charCount);
  
  // catch block for ajax
  } else {
    errorMessage('Something is broken! Give it a shake!', charCount);
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