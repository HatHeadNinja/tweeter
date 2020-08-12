$(document).ready(function() {

  console.log('document ready!');
  
  // $('#tweet-text').on('keypress', () => console.log(($(this).val())));

  $('#tweet-text').on('blur', function(){ 
    let charCount = $(this).val().length;
    // only enable tweet button when below 141 char
    console.log('blur', charCount);
  });

  $('#tweet-text').on('keyup', function(){ 
    let charCount = $(this).val().length;
    
    if (charCount <= 140 ) {
      $('.counter').val(charCount);
    } else {
      charCount = 140 - charCount;
      $('.counter').val(charCount);
    }
  });

 

});