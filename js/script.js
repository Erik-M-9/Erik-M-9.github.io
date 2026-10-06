
console.log("script.js is connected!");
const titleBtn = document.querySelector("#titlebtn");
const response = document.querySelector("#response");

titleBtn.addEventListener("click", function () {
  response.style.display = "block";
});
const skillPills = document.querySelectorAll(".skill-pill");

skillPills.forEach(function (pill) {
  pill.addEventListener("click", function () {
    const detail = pill.querySelector(".skill-detail");
    detail.style.display = "inline";
  });
});