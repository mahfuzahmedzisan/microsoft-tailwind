const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const menu = document.getElementById("menu");

const dropDown = document.querySelectorAll(".drop-down");
const dropDown3 = document.querySelectorAll(".drop-down-3");

openMenuBtn.addEventListener("click", () => {
   menu.classList.add("hidden")
   if (menu.classList.contains("hidden")) {
      openMenuBtn.classList.add("hidden")
      closeMenuBtn.classList.remove("hidden")
      menu.classList.remove("hidden")
   }
   else {
      closeMenuBtn.classList.add("hidden")
      openMenuBtn.classList.remove("hidden")
      menu.classList.add("hidden")
   }
   dropDown.forEach((item) => {
      item.classList.remove("after:rotate-180")
      item.nextElementSibling.classList.add("hidden")
   })
});
closeMenuBtn.addEventListener("click", () => {
   if (menu.classList.contains("hidden")) {
      openMenuBtn.classList.add("hidden")
      closeMenuBtn.classList.remove("hidden")
      menu.classList.remove("hidden")
   }
   else {
      closeMenuBtn.classList.add("hidden")
      openMenuBtn.classList.remove("hidden")
      menu.classList.add("hidden")
   }
})
dropDown.forEach((item) => {
   item.addEventListener("click", () => {
      item.classList.toggle("after:rotate-180")
      item.nextElementSibling.classList.toggle("hidden")
   })
})
dropDown3.forEach((item) => {
   item.addEventListener("click", () => {
      item.classList.toggle("after:rotate-180")
      item.nextElementSibling.classList.toggle("hidden")
   })
})