/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {

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
    // console.log('createTweetElement tweet:', tweet);
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

  const $form = $('.new-tweet form');
  $form.on('submit', (event) => {
    event.preventDefault();
    $("#tweet-text").text($form);
    const serialized = $form.serialize();
    
    $.post(`/tweets`, serialized)
      .then((tweet) => {
        loadTweets();
        $('#tweet-text').val('').focus();
        $('#counter').val('140');
        $('#new-tweet-button').prop("disabled", true);
        $('#new-tweet-button').css("background-color", "grey");
      });
  });

  loadTweets();

});