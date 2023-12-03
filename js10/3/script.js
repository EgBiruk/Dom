const openMenu = document.querySelector(".open-menu");
const wrapper = document.querySelector(".wrapper");
const myWindow = window;


myWindow.addEventListener("click", (event) => {
  if (event.target.classList.contains("open-menu")) {
    wrapper.classList.add("opened");
    openMenu.classList.remove("open-menu");
    openMenu.classList.add("close-menu");
    openMenu.style.backgroundImage = 'url(./images/krest.svg)';
  } else if (event.target.classList.contains("close-menu")) {
    wrapper.classList.remove("opened");
    openMenu.classList.remove("close-menu");
    openMenu.classList.add("open-menu");
    openMenu.style.backgroundImage = 'url(./images/menu-ea4aa692c11e9c044cc7c4607dff56796d1c9cbc88406c0191021a5427e9d13f.svg)';
  }
});

