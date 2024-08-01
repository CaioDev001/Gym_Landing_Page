const scrollHeader = () => {
  const header = document.getElementById("header")
  window.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header")
}

const scrollActive = () => {
  const sections = document.querySelectorAll("section[id]")
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 58
    const sectionID = current.getAttribute("id")
    const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionID + "]")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link")
    } else {
      sectionsClass.classList.remove("active-link")
    }
  })
}

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up")
  window.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollHeader)
window.addEventListener("scroll", scrollActive)
window.addEventListener("scroll", scrollUp)

export { scrollHeader, scrollActive, scrollUp }