const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const key = e.target.id;

    switch (key) {
      case "grey":
      case "white":
      case "blue":
      case "yellow":
        body.style.backgroundColor = key;
        break;
      default:
        body.style.backgroundColor = "white";
        break;
    }
  });
});
