$(document).ready(function() {

  console.log('document ready!');

  let alerted;
  
  // $('#tweet-text').on('keypress', () => console.log(($(this).val())));

  $('#tweet-text').on('blur', function(){ 
    let charCount = $(this).val().length;
    // only enable tweet button when below 141 char
    //console.log('blur', charCount);
  });

  $('#tweet-text').on('change', function(){ 
    let charCount = $(this).val().length;
    // only enable tweet button when below 141 char
    //console.log('blur', charCount);
  });

  $('#tweet-text').on('keyup', function(){ 
    let charCount = $(this).val().length;
    if (charCount === 0) {
      $('.counter').val(140);
      $('#new-tweet-button').prop("disabled", true);
      $('#new-tweet-button').css("background-color", "grey");
      console.log('=== 0 keyup charCount:', charCount, 'alerted', alerted);
    } else if (charCount > 0 && charCount < 140 ) {
        $('.counter').val(charCount);
        alerted = false;
        $('#new-tweet-button').prop("disabled", false);
        $('#new-tweet-button').css("background-color", "blue");
        console.log('> 140 < 0 keyup charCount:', charCount, 'alerted', alerted);
    } else if (charCount === 140 && alerted === false){
        //MENTOR QUESTION: can I user a promise to wait for keyup?
        $('.counter').val(charCount);
        $('#new-tweet-button').prop("disabled", false);
        $('#new-tweet-button').css("background-color", "grey");
        alerted = true;
        console.log('===140 keyup charCount:', charCount, 'alerted', alerted);
        alert('WHOA! You have exceeded the 140 character limit. Please try to be more concise.');
    } else if (charCount > 140) {
        charCount = 140 - charCount;
        $('.counter').val(charCount);
        $('#new-tweet-button').prop("disabled", true);
        $('#new-tweet-button').css("background", "grey");
        console.log('< 140 keyup charCount:', charCount, 'alerted', alerted);
    }
  });
});