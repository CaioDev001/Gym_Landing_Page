const contactForm = document.getElementById("contact-form")
const contactMessage = document.getElementById("contact-message")
const contactUser = document.getElementById("contact-user")

const sendEmail = (e) => {
  e.preventDefault()

  if (contactUser.value === "") {
    contactMessage.classList.remove("color-green")
    contactMessage.classList.add("color-red")
    contactMessage.textContent = "You must enter your email"

    setTimeout(() => {
      contactMessage.textContent = ""
    }, 3000)
  } else {
    emailjs.sendForm("service_rf7gcgm", "template_y1yl8b6", "#contact-form", "hmyA4Jud4iqYr8kB7")
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

export { sendEmail }