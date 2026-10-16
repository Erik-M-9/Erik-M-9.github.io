// REVIEW: this file is loaded on all three pages, but #titlebtn and #response only exist on index.html.
// In the original, the line that attaches the click handler to #titlebtn ran on every page. On about.html
// and work.html that element is null, so JavaScript threw an error and stopped. That meant the skill pills
// on work.html never worked. The fix below only attaches the handler if the element exists.
console.log("script.js is connected!");

const titleBtn = document.querySelector("#titlebtn");
const response = document.querySelector("#response");

if (titleBtn && response) {
  titleBtn.addEventListener("click", function () {
    response.style.display = "block";
  });
}

// Each skill pill reveals its description when clicked.
const skillPills = document.querySelectorAll(".skill-pill");

skillPills.forEach(function (pill) {
  pill.addEventListener("click", function () {
    const detail = pill.querySelector(".skill-detail");
    // REVIEW: added a check so the script doesn't error if a pill is missing its description.
    if (detail) {
      detail.style.display = "inline";
    }
  });
});
