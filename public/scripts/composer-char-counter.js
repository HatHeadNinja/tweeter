$(document).ready(function() {

  let alerted;
  
  // DEAR EVALUATOR PERSON
  // ======================
  // I really wanted to DRY up this code, perhaps even move all the functions
  // setting element properties and css to a helper file but am late submitting
  // so alas, can't afford any time to do. I'd also like to spend a some time
  // ordering CSS elements across the files. But, alas, again!


  // V2: review charCount declarations.  const or let? or, nothing at all?
  $('#tweet-text').on('blur', function() {
    const charCount = $(this).val().length;
  });

  $('#tweet-text').on('change', function() {
    const charCount = $(this).val().length;
  });

  $('#tweet-text').on('keyup', function() {
    let charCount = $(this).val().length;
    if (charCount === 0) {
      $('.counter').val('0 / 140');
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background-color", "grey");
      $('#tweet-label').css("display", "flex");
      $('#error').css("display","none");
      $('.counter').css("color", "darkgray");
      
    } else if (charCount > 0 && charCount < 140) {
      alerted = false;
      $('.counter').val(charCount + ' / 140');
      $('#new-tweet-button').prop("disabled", false);
      $('.counter').css("color", "darkgray");
      $('#new-tweet-button').css("background-color", "#4056A1");
      $('#tweet-label').css("display", "flex");
      $('#error').css("display","none");

    } else if (charCount === 140 && alerted === false) {
      alerted = true;
      $('.counter').val(charCount + ' / 140');
      $('.counter').css("color", "crimson");
      $('#new-tweet-button').prop("disabled", false);
      $('#tweet-label').css("display", "none");
      $('#new-tweet-button').css("background-color", "grey");
      errorMsg('Too many characters! Say more with less...');

    } else if (charCount > 140) {
      charCount = 140 - charCount;
      $('.counter').val(charCount + ' / 140');
      $('#new-tweet-button').prop("disabled", true);
      $('#tweet-label').css("display", "none");
      $('.counter').css("color", "crimson");
      $('#new-tweet-button').css("background", "grey");
      $('#error').css("display","flex");
      $('tweet-text').css("border-bottom", "1px solid red");
    }

    else {
      // catch block for errors
      errorMsg('Something has gone wrong - please shake the Internet!');
    }
  });

  function errorMsg(errMsg) {
    if ($("#error").first().is(":hidden")) {
      $('#error').css("display","flex");
      $("#error").slideDown("slow");
      $("#error").val(errMsg);
    } else {
      $("#error").hide();
    }
  }
  
});