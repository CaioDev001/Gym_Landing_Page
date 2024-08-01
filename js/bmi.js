const calculateForm = document.getElementById("calculate-form")
const calculateCm = document.getElementById("calculate-cm")
const calculateKg = document.getElementById("calculate-kg")
const calculateMessage = document.getElementById("calculate-message")

const showMessage = (message, colorClass) => {
  calculateMessage.classList.remove("color-green", "color-red")
  calculateMessage.classList.add(colorClass)
  calculateMessage.textContent = message

  setTimeout(() => {
    calculateMessage.textContent = ""
  }, 3000)
}

const calculateBmi = (e) => {
  e.preventDefault()

  if (calculateCm.value === "" || calculateKg.value === "") {
    showMessage("Fill in the Height and Weight", "color-red")
    return
  }

  const cm = calculateCm.value / 100
  const kg = calculateKg.value
  const bmi = Math.round(kg / (cm * cm))

  if (bmi < 18.5) showMessage(`Seu IMC é ${bmi}, você está magro`, "color-green")
  else if (bmi < 25) showMessage(`Seu IMC é ${bmi}, você está saudável`, "color-green")
  else showMessage(`Seu IMC é ${bmi}, você está acima do peso`, "color-green")

  clearInputs()
}

const clearInputs = () => {
  calculateCm.value = ""
  calculateKg.value = ""
}

calculateForm.addEventListener("submit", calculateBmi)

export { calculateBmi, clearInputs }