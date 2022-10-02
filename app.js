const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

setGradient = function () {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";

  //   css.textContent = body.style.background;
};

// the input event gets triggered automatically so you dont need to "call" the function
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// color1.addEventListener("input", () => {
// //   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
// });

// color2.addEventListener("input", () => {
//   //   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
// });
