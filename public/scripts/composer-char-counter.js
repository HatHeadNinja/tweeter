$(document).ready(function() {

  let alerted;
  
  $('#tweet-text').on('blur', function(){ 
    let charCount = $(this).val().length;
  });

  $('#tweet-text').on('change', function(){ 
    let charCount = $(this).val().length;
  });

  $('#tweet-text').on('keyup', function(){ 
    let charCount = $(this).val().length;
    if (charCount === 0) {
      $('.counter').val('0 / 140');
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background-color", "grey");
      
    } else if (charCount > 0 && charCount < 140 ) {
        $('.counter').val(charCount + ' / 140');
        $('.counter').css("color", "darkgray");
        alerted = false;
        $('#new-tweet-button').prop("disabled", false);
        $('#new-tweet-button').css("background-color", "#4056A1");
        $('#error').css("display","none");

    } else if (charCount > 120 && charCount < 140) {
        $('.counter').css("color", "darkgoldenrod");
        $('.counter').val(charCount + ' / 140');

    } else if (charCount === 140 && alerted === false){
        $('.counter').css("color", "crimson");
        $('.counter').val(charCount + ' / 140');
        $('#new-tweet-button').prop("disabled", false);
        $('#new-tweet-button').css("background-color", "grey");
        alerted = true;
        errorMsg('WHOA! Too many characters! Conciseness is the new cool!');

    } else if (charCount > 140) {
      charCount = 140 - charCount;
      $('.counter').val(charCount + ' / 140');
      $('.counter').css("color", "crimson");
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background", "grey");
      $('#error').css("display","flex");
      $('tweet-text').css("border-bottom", "1px solid red");  
    }
  });
  function errorMsg (errMsg){
    // console.log('errMsg',errMsg);
    if ( $( "#error" ).first().is( ":hidden" ) ) {
      $('#error').css("display","flex");
      $( "#error" ).slideDown( "slow" );
      $( "#error" ).val(errMsg);
    } else {
      $( "#error" ).hide();
    }
  }
  
});