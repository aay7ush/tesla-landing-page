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

// Scroll Animation
document.lastScrollPosition = 0
document.lastCentered = 0
document.onWayTo = null

document.addEventListener("scroll", () => {
  const sections = [...document.querySelectorAll("section")]
  const currentScrollPosition = window.pageYOffset + window.innerHeight / 2

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    if (
      currentScrollPosition >= sectionTop &&
      currentScrollPosition <= sectionTop + sectionHeight
    ) {
      section.querySelector(".product__content").classList.add("active")
      document.lastCentered = index
    } else {
      section.querySelector(".product__content").classList.remove("active")
    }
  })
})
