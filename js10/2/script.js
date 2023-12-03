const openMenu = document.getElementById("open_menu");
const closeMenu = document.getElementById("close_menu");
const wrapper = document.getElementById("wrapper");
const main = document.querySelector(".main");

const myWindow = window;

myWindow.addEventListener("click", (event) => {
  if (event.target.classList.contains("open_menu")) {
    wrapper.classList.add("opened");
    main.style.marginLeft = "500px";
  }
  if (event.target.classList.contains("close_menu")) {
    wrapper.classList.remove("opened");
    main.style.marginLeft = "0px";
  }
});
