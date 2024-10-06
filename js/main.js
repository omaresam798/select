let buttons = document.querySelectorAll("#one,#two,#three,#four,#five")
let submit = document.querySelector("#submit")
let first = document.querySelector(".first-child-master")
let second = document.querySelector(".scond-child-master")
let stampa = document.querySelector(".first-stampa")
let counter = 0
buttons.forEach(item => item.addEventListener("click", function () {
    if (counter >= 0 && counter < 5) {
        counter++
    }
    item.style.backgroundColor = "white"
    item.style.color = "black"
}))

submit.addEventListener("click", function () {
    first.style.display = "none"
    second.style.display = "flex"
    stampa.textContent = counter
})