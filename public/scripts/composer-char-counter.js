$(document).ready(function() {

  // used during error messaging states
  let alerted;
  
  // DEAR EVALUATOR PERSON
  // ======================

  // Processes all targetted user events with length from the tweet input
  const charCounter = function (charCount) {
    
    if (charCount === 0){
      $('.counter').val('0 / 140');
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background-color", "grey");
      $('#tweet-label').css("display", "flex");
      $('#error').css("display","none");
      $('.counter').css("color", "darkgray");
      //return;
    } else if (charCount > 0 && charCount < 141) {
      alerted = false;
      $('.counter').val(charCount + ' / 140');
      $('#new-tweet-button').prop("disabled", false);
      $('.counter').css("color", "darkgray");
      $('#new-tweet-button').css("background-color", "#4056A1");
      $('#tweet-label').css("display", "flex");
      $('#error').css("display","none");

    } else if (charCount === 141 && alerted === false) {
      alerted = true;
      $('.counter').val(charCount + ' / 140');
      $('#new-tweet-button').prop("disabled", true);
      $('.counter').css("color", "crimson");
      $('#tweet-label').css("display", "none");
      $('#new-tweet-button').css("background-color", "grey");
      errorMsg('Too many characters! Say more with less...');

    } else if (charCount > 141) {
      charCount = 140 - charCount;
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background", "grey");
      $('.counter').val(charCount + ' / 140');
      $('.counter').css("color", "crimson");
      $('#tweet-label').css("display", "none");
      $('tweet-text').css("border-bottom", "1px solid red");
      $('#error').css("display","flex");
    }
  }
  
  // Capture events in the tweet input and sends tweet length to charCounter function
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
  
  function errorMsg(errMsg) {
    if ($("#error").first().is(":hidden")) {
      $("#error").val(errMsg);
      $('#error').css("display","flex");
    } else {
      $("#error").hide();
    }
  }

});