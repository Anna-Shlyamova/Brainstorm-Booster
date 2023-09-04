// Перенос emotions__self-value
(function moveSelfValue() {
  const screenWidth = window.innerWidth;
  const blockStart = document.querySelector(".emotions__block");
  const blockEnd = document.querySelector(".emotions__items");
  const item = document.querySelector(".emotions__self-value");
  const button = document.querySelector(".emotions__btn");
  if (screenWidth <= 1300) {
      blockEnd.appendChild(item);
      item.style.marginTop = "0";
      console.log("test");
  } else {
      blockStart.appendChild(item);
      blockStart.appendChild(button);
  }})();