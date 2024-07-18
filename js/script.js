const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu")
})

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu")
})

const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

const scrollHeader = () => {
  const header = document.getElementById("header")
  this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header")
}
window.addEventListener("scroll", scrollHeader)

const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
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
window.addEventListener("scroll", scrollActive)

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up")

  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
})
sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: "bottom"})
sr.reveal(`logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, calculate__content`, {origin: "left"})
sr.reveal(`.choose__content, calculate__img`, {origin: "right"})

const calculateForm = document.getElementById("calculate-form")
const calculateCm = document.getElementById("calculate-cm")
const calculateKg = document.getElementById("calculate-kg")
const calculateMessage = document.getElementById("calculate-message")

const calculateBmi = (e) => {
  e.preventDefault()

  const showMessage = (message, colorClass) => {
    calculateMessage.classList.remove("color-green", "color-red")
    calculateMessage.classList.add(colorClass)
    calculateMessage.textContent = message
  
    setTimeout(() => {
      calculateMessage.textContent = ""
    }, 3000)
  }

  if (calculateCm.value === "" || calculateKg.value === "") {
    showMessage("Fill in the Height and Weight", "color-red")
    return
  }

  const cm = calculateCm.value / 100
  const kg = calculateKg.value
  const bmi = Math.round(kg / (cm * cm))

  if (bmi < 18.5) showMessage(`Your BMI is ${bmi} and you are skinny`, "color-green")
  else if (bmi < 25) showMessage(`Your BMI is ${bmi} and you are healthy`, "color-green")
  else showMessage(`Your BMI is ${bmi} and you are overweight`, "color-green")

  clearInputs()
}

const clearInputs = () => {
  calculateCm.value = ""
  calculateKg.value = ""
}

calculateForm.addEventListener("submit", calculateBmi)

const contactForm = document.getElementById("contact-form")
const contactMessage = document.getElementById("contact-message")
const contactUser = document.getElementById("contact-user")

const sendEmail = (e) => {
  e.preventDefault()

  if(contactUser.value === "") {
    contactMessage.classList.remove("color-green")
    contactMessage.classList.add("color-red")

    contactMessage.textContent = "You must enter your email"

    setTimeout(() => {
      contactMessage.textContent = ""
    }, 3000)
  } else {
    emailjs.sendForm("service_rf7gcgm","template_y1yl8b6","#contact-form","hmyA4Jud4iqYr8kB7")
      .then(() => {
        contactMessage.classList.add("color-green")
        contactMessage.textContent = "You registered successfully"

        setTimeout(() => {
          contactMessage.textContent = ""
        }, 3000)
      }, (error) => {
        alert("OOPS! SOMETHING HAS FAILED...", error)
      })

      contactUser.value = ""
  }
}

contactForm.addEventListener("submit", sendEmail)
