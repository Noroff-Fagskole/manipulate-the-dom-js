let currentDate = document.querySelector("[data-date='currentDate']");
currentDate.innerHTML = new Date();

// 1::::
/*
There is a notification banner on the site

1. add a friendly message to the notification "notification-content"
2. add a class to make the banner green, use this class: has-background-primary from: https://bulma.io/documentation/modifiers/color-helpers/

*/

const notification = document.querySelector('.notification-content');
notification.innerHTML += 'Hello there!';

notification.classList.add('has-background-primary');



// 2::::
/*
 The notification banner should not always show.
 1. only show the notification banner when you click the login button. (clue, this is an event.)
*/

// 3::::
/*
  The hero banner looks sad without an image, please add a nice photo as background image to the hero banner.
*/
