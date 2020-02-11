let currentDate = document.querySelector("[data-date='currentDate']");
currentDate.innerHTML = new Date();

// 1::::
/*
There is a notification banner on the site

1. add a friendly message to the notification "notification-content"
2. add a class to make the banner green, use this class: has-background-primary from: https://bulma.io/documentation/modifiers/color-helpers/

*/

const notification = document.querySelector(".notification-content");
notification.innerHTML += "Hello there!";

const notificationContainer = document.querySelector(".notification");
notificationContainer.classList.add("has-background-primary");

// 2::::
/*
 The notification banner should not always show.
 1. only show the notification banner when you click the login button. (clue, this is an event.)
*/

const loginButton = document.querySelector(".buttons .is-light");
loginButton.addEventListener("click", showBanner);

notificationContainer.style.display = 'none';

function showBanner(event) {

  if(notificationContainer.style.display === 'none'){
    notificationContainer.style.display = 'block';
  } else {
    notificationContainer.style.display = 'none';
  }

}

// can also write the code this code using CSS property 'is-invisible'
// notificationContainer.classList.toggle("is-invisible");

// function showBanner(event) {
//   notificationContainer.classList.toggle("is-invisible");
// }


// 3::::
/*
  The hero banner looks sad without an image, please add a nice photo as background image to the hero banner.
*/
