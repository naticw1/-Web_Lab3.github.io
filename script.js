
const hamburger = document.querySelector(".menu-icon")
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
})

document.querySelec