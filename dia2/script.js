const menu = document.querySelector(".menu")
const linhaUm = document.querySelector(".linha-um")
const linhaDois = document.querySelector(".linha-dois")
const linhaTres = document.querySelector(".linha-tres")

function adicionarClasse () {
    linhaUm.classList.toggle("sem-animacao")
    linhaDois.classList.toggle("sem-animacao")
    linhaTres.classList.toggle("sem-animacao")
}

menu.addEventListener("click", () => {
    adicionarClasse()
})