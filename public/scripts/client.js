/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {

  // escape text to prevent malicious input
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // render tweet array according to format
  const renderTweets = (tweets) => {
    $('#tweets').empty();
    tweets.forEach(tweet => {
      $('#tweets').prepend(createTweetElement(tweet));
    });
  };
 
  // create HTML with tweet data
  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article class="tweet">
          <div class='tweet-profile'>
            <img class="tweet-profile-img" src=${tweet.user.avatars}>
            <h3>${tweet.user.name}</h3>
            <p class="user-handle">${tweet.user.handle}</p>
          </div>
          <p class='tweet-section .overflow'>${escape(tweet.content.text)}</p>
          <footer>
            <p>${moment(tweet.created_at).toNow(true)} ago</p>
            <div class="tweet-icons"><span class="fa fa-flag"></span>
            <span class="fa fa-retweet"></span>
            <span class="fa fa-heart"></span></div>
          </footer>
      </article>
    `);
    return $tweet;
  };

  // load tweets from /tweets location and render them one by one
  const loadTweets = () => {
    $.ajax('http://localhost:8080/tweets', {method: 'GET'})
      .then((data) => {
        renderTweets(data);
      });
  };

  // submit new tweet form
  const $form = $('.new-tweet form');
  $form.on('submit', (event) => {
    event.preventDefault();
    
    const charCount = $("#tweet-text").val().length;
    
    if (charCount === 0) {
      errorMessage('Cannot post an empty tweet! Say something...', 0);
    } else {
      $("#tweet-text").text($form);
      const serialized = $form.serialize();
      
      $.post(`/tweets`, serialized)
        .then((tweet) => {
          $('#tweet-text').val('').focus();
          okMessage('What are you humming about?', 0)
          loadTweets();
        });
    }
  });

  // set focus to tweet input when user clicks 'Write a new tweet'
  $('.compose-tweet').click(function()  {
    $('#tweet-text').focus();
  });
  

  loadTweets();

});