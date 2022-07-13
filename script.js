const hamburger = document.querySelector(".hamburger");
const navhamb = document.querySelector(".navhamb");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  navhamb.classList.toggle("navhamb--active");
};

hamburger.addEventListener("click", handleClick);
