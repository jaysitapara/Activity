document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("generateColorButton");
  let colorDisplay = document.getElementById("colorDisplay");

  btn.addEventListener("click", function () {
    let randomColor = getRandomColor();
    colorDisplay.innerText = randomColor;
    colorDisplay.style.backgroundColor = randomColor;
  });

  function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
  }
});
