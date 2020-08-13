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
  },
  {
    "user": {
      "name": "Einstein",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@emc2"
      },
    "content": {
        "text": "Imagination is more important than knowledge."
      },
    "created_at": 1461116212345
  }
]

const tweetData = {
  "user": {
    "name": "Einstein",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@emc2"
    },
  "content": {
      "text": "Imagination is more important than knowledge."
    },
  "created_at": 1461116212345
}

const renderTweets = function(tweets) {
  // loops through tweets
  // iterate through the array
  for (const tweet of tweets) {
    console.log('renderTweets tweet:' , tweet);
    createTweetElement(tweet);
  // // turn each object into an LI
  //       const $li = $('<li>').text(recipe.title); // <li>recipe.title</li>
  //       // append each LI to the UL in the DOM
  //       
  } 

  // calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
// $ul.append($li);
}

// MENTOR QUESTION: how do insert tweet object properties into the HTML result?
const createTweetElement = function(tweet) {
  //let $tweet = /* Your code for creating the tweet element */
  //const $tweet = $(`<article class="tweet-section">Hello world</article>`);
  console.log('createTweetElement tweet:', tweet);
  const $tweet = $(`
  <article class="tweet">
        <header>
          <div class='tweet-profile'>
            <img class="tweet-profile-img" src="https://i.imgur.com/73hZDYK.png">
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
  $('.container').append($tweet);
  // ...
  return $tweet;
}

renderTweets(data);


// Test / driver code (temporary). Eventually will get this from the server.
//const $tweet = createTweetElement(tweetData);
// Test / driver code (temporary)
//console.log('$tweet:', $tweet); // to see what it looks like
//$('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

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