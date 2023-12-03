const openPopup = document.getElementById("open_pop_up");
const closePopup = document.getElementById("close_pop_up");
const popUpCont = document.querySelector(".pop_up_container");
const popup = document.getElementById("pop_up");
const myWindow = window;

myWindow.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target === openPopup) {
    event.preventDefault();
    popup.classList.add("opened");
  } else if (event.target === closePopup || event.target === popUpCont) {
    popup.classList.remove("opened");
  }
});
