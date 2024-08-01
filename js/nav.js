const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")
const navLink = document.querySelectorAll(".nav__link")

const toggleMenu = () => {
  navMenu.classList.add("show-menu")
}

const closeMenu = () => {
  navMenu.classList.remove("show-menu")
}

const linkAction = () => {
  navMenu.classList.remove("show-menu")
}

navToggle.addEventListener("click", toggleMenu)
navClose.addEventListener("click", closeMenu)
navLink.forEach(n => n.addEventListener("click", linkAction))

export { toggleMenu, closeMenu, linkAction }