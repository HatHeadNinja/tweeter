# About This Project
This project was part of Lighthouse Labs web developer bootcamp

# Notes to Evaluator
Hello, I have commented some notes in my code, but this is a better place for them!

I really wanted to DRY up some code and make it more modular, particularly client.js and composer-char-counter, by moving all the repetitive functions setting element properties and css to a helper file but am late submitting this project so alas, can't afford any time to do right now. I'd also like to spend some time ordering CSS elements across the files. But, alas, again, out of time.

I do plan to come back to this project because the UX requirements are sub-standard and if I am to show potential employers, these shortcomings must be addressed first.

These UX shortcomings include:
* Use of red in nav for animated arrows. Red is for errors. Studies demonstrate that orange is the top performing CTA colour
* Starts input character counter at 140 when in fact there are 0 characters in the input field, (I used a ‘n / 140’ for a counter, so that the user knows how many characters they have left)
* Submit button should just be disabled when input <1 && input > 140. Using hover-over tool tip over submit button when 0 characters is better than a scary error message (Twitter doesn’t even do a tool tip, just disabled button)
* ‘Write a new tweet’ CTA in mobile view nav bar is too far from the main content to be effective
* The ‘What are you humming about?’ label can be reused for the error message and changed to red (and changed back when characters between 0 and 140) Far less jarring
* Instead of having the tweet button to the far left of the input field, it would be better placed on the far right, preceded by the character counter. Not only would this reduce mouse movement, especially in desktop display, and keep the user more focused, it would line the button up to where the CTA in the nav bar is pointing.

# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies
* body-parser v1.15.2
* chance: v1.0.2
* express: v4.17.1
* md5: v2.1.0
* moment: 2.27.0

# Screenshots
## Desktop
![Desktop](https://github.com/HatHeadNinja/tweeter/blob/master/docs/desktop.png)
## Mobile
![Mobile](https://github.com/HatHeadNinja/tweeter/blob/master/docs/mobile.png)

