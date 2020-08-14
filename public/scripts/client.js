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
  }

  // render tweet array according to format
  const renderTweets = (tweets) => {
    $('#tweets').empty();
    tweets.forEach(tweet => {
      $('#tweets').prepend(createTweetElement(tweet))
    })
  }
 
  // create HTML with tweet data
  const createTweetElement = function(tweet) {
    console.log('createTweetElement tweet:', tweet);
    const $tweet = $(`
      <article class="tweet">
          <header>
            <div class='tweet-profile'>
              <img class="tweet-profile-img" src=${tweet.user.avatars}>
              <h3>${tweet.user.name}</h3>
          </div>
          <p>${tweet.user.handle}</p>
          </header>
          <p class='tweet-section'>${escape(tweet.content.text)}</p>
          <footer>
            <p>${tweet.created_at}</p>
            <div><i>icon1</i><i>icon2</i><i>con3</i></div>
          </footer>
      </article>
    `);
    console.log('createTweetElement $tweet:', $tweet);
    return $tweet;
  }

  // load tweets from /tweets location and render them one by one
  const loadTweets = () => {
    $.ajax('http://localhost:8080/tweets', {method: 'GET'})
      .then((data) => {
        console.log('loadTweets data:', data)
        renderTweets(data)
      })
    };

  const $form = $('.new-tweet form');
  $form.on('submit', (event) => {
    event.preventDefault();
    console.log('$form:', $form);
    $("#tweet-text").text($form);
    const serialized = $form.serialize();
    console.log('$form serialized:', serialized);

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