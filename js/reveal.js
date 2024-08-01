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

export { sr }