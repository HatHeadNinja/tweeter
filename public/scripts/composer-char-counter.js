$(document).ready(function() {

  // console.log('document ready!');

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
      $('.counter').val(140);
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background-color", "grey");
      // console.log('=== 0 keyup charCount:', charCount, 'alerted', alerted);
    } else if (charCount > 0 && charCount < 140 ) {
        $('.counter').val(charCount);
        alerted = false;
        $('#new-tweet-button').prop("disabled", false);
        $('#new-tweet-button').css("background-color", "blue");
        $('#error').css("display","none");
        //// console.log('> 140 < 0 keyup charCount:', charCount, 'alerted', alerted);
    } else if (charCount === 140 && alerted === false){
        $('.counter').val(charCount);
        $('#new-tweet-button').prop("disabled", false);
        $('#new-tweet-button').css("background-color", "grey");
        alerted = true;
        // console.log('===140 keyup charCount:', charCount, 'alerted', alerted);
        errorMsg('WHOA! Too many characters! Conciseness is the new cool!');
        //$('#error').css("display","flex");
        //$('tweet-text').css("border-bottom", "red");
    } else if (charCount > 140) {
        charCount = 140 - charCount;
        $('.counter').val(charCount);
        $('#new-tweet-button').prop("disabled", true);
        $('#new-tweet-button').css("background", "grey");
        $('#error').css("display","flex");
        $('tweet-text').css("border-bottom", "1px solid red");
        // console.log('< 140 keyup charCount:', charCount, 'alerted', alerted);
    }
  });
  function errorMsg (errMsg){
    // console.log('errMsg',errMsg);
    if ( $( "#error" ).first().is( ":hidden" ) ) {
      $( "#error" ).slideDown( "slow" );
      $( "#error" ).val(errMsg);
    } else {
      $( "#error" ).hide();
    }
  }
  
});