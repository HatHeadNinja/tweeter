/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {

 // Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const renderTweets = function(tweets) {
// loops through tweets

// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
}

const createTweetElement = function(tweet) {
  //let $tweet = /* Your code for creating the tweet element */
  //const $tweet = $(`<article class="tweet-section">Hello world</article>`);
  const $tweet = $(`
  <article class="tweet">
        <header>
          <div class='tweet-profile'>
            <img class="tweet-profile-img" src="avatars">
            <h3>user.name</h3>
        </div>
        <p>user.handle</p>
        </header>
        <p class='tweet-section'>content</p>
        <footer>
          <p>created_at</p>
          <div><i>icon1</i><i>icon2</i><i>con3</i></div>
        </footer>
      </article>
  `);
  console.log('createTweetElement:', $tweet);
  // ...
  return $tweet;
}

renderTweets(data);

// MENTOR QUESTION: should the driver code live inside the document ready function?
// ================
// Test / driver code (temporary). Eventually will get this from the server.


const $tweet = createTweetElement(tweetData);

// MENTOR QUESTION: Want to see tweet data in console but seems to loading before document loaded. Also, let's put something on the index.html page too.
// ================
// Test / driver code (temporary)
console.log('$tweet:', $tweet); // to see what it looks like
$('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});



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