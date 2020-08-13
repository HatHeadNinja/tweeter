/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {

  // render tweet array according to format
  const renderTweets = (tweets) => {
    $('#tweets').empty();
    tweets.forEach(tweet => {
      $('#tweets').prepend(createTweetElement(tweet))
    })
  }
 
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
          <p class='tweet-section'>${tweet.content.text}</p>
          <footer>
            <p>${tweet.created_at}</p>
            <div><i>icon1</i><i>icon2</i><i>con3</i></div>
          </footer>
      </article>
    `);
    console.log('createTweetElement $tweet:', $tweet);
    //$('.container').append($tweet);
    return $tweet;
  }

  // load tweets from /tweets location and render them one by one
  const loadTweets = () => {
    $.ajax('http://localhost:8080/tweets', {method: 'GET'})
      .then((data) => {
        console.log('42 loadTweets data:', data)
        renderTweets(data)
      })
    };

  
  const $form = $('.new-tweet form');
  $form.on('submit', (event) => {
    event.preventDefault();
    const serialized = $form.serialize();
    console.log(serialized);

    $.post(`/tweets`, serialized)
      .then((tweet) => {
        //console.log('56', tweet);
        //createTweetElement(tweet);
        loadTweets();
        $('#tweet-text').val('').focus();
        $('#counter').val('140');
      });
  });

  loadTweets();  //good!

});


 // OLD STUFF
  /*   const renderTweets = function(tweets) {
      // loops through tweets
      // iterate through the array
      for (const tweet of tweets) {
        console.log('renderTweets tweet:' , tweet);
        createTweetElement(tweet);
      } 
    } */

// OLD STUFF
/* const newTweet = `<article class="tweet">
    <header>
      <div>
        <img src="/images/profile-hex.png">
        <h3>${user.name}</h3>
      </div>
      <p>${user.handle}</p>
    </header>
    <p>${content}</p>
    <footer>
      <p>${created_at}</p>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </div>
    </footer>
  </article>` */



  