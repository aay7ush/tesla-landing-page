// Mobile Nav Functionality

const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")

const openMenu = () => {
  document.querySelector(".backdrop").classList.add("active")
  document.querySelector(".mobile-nav").classList.add("active")
}

const closeMenu = () => {
  document.querySelector(".backdrop").classList.remove("active")
  document.querySelector(".mobile-nav").classList.remove("active")
}

menuBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)
