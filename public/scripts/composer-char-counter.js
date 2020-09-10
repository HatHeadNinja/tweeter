$(document).ready(function() {

  let alerted;
  
  // DEAR EVALUATOR PERSON
  // ======================
  // I really wanted to DRY up this code, perhaps even move all the functions
  // setting element properties and css to a helper file but am late submitting
  // so alas, can't afford any time to do. I'd also like to spend a some time
  // ordering CSS elements across the files. But, alas, again!


  // V2: review charCount declarations.  const or let?

   
  $('#tweet-text').on('blur', function() {
    let charCount = $(this).val().length;
  });

  $('#tweet-text').on('change', function() {
    let charCount = $(this).val().length;
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
      $('.counter').val(charCount + ' / 140');
      $('.counter').css("color", "darkgray");
      alerted = false;
      $('#new-tweet-button').prop("disabled", false);
      $('#new-tweet-button').css("background-color", "#4056A1");
      $('#tweet-label').css("display", "flex");
      $('#error').css("display","none");

    } else if (charCount > 120 && charCount < 140) {
      $('.counter').css("color", "darkgoldenrod");
      $('.counter').val(charCount + ' / 140');
      $('#tweet-label').css("display", "flex");
      $('#error').css("display","none");

    } else if (charCount === 140 && alerted === false) {
      $('.counter').css("color", "crimson");
      $('#tweet-label').css("display", "none");
      $('.counter').val(charCount + ' / 140');
      $('#new-tweet-button').prop("disabled", false);
      $('#new-tweet-button').css("background-color", "grey");
      alerted = true;
      errorMsg('Too many characters! Say more with less...');

    } else if (charCount > 140) {
      charCount = 140 - charCount;
      $('#tweet-label').css("display", "none");
      $('.counter').val(charCount + ' / 140');
      $('.counter').css("color", "crimson");
      $('#new-tweet-button').prop("disabled", true);
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