document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  changeBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
