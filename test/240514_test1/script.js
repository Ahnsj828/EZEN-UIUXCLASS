const twitterInput = document.querySelector(".user-input-txt");
// console.log(text);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const tweetText = encodeURIComponent(twitterInput.value);
    const twitterIntentUrl =
      "https://twitter.com/intent/tweet?text=" + tweetText;

    window.open(twitterIntentUrl, "_blank");
  });
});
