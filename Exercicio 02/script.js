const posts = [
    {
        userid: 1,
        id: 1,
        title: "Primeiro Post",
        body: "Aprendendo a manipular o DOM."
    },
    {
        userid: 1,
        id: 2,
        title: "Segundo post",
        body: "Arrays de objetos são parecidos com o JSON de uma API."
    },
    {
        userid: 2,
        id: 3,
        title: "Terceiro post",
        body: "Em breve vamos buscar estes dados no servidor."
    },
    {
        userid: 2,
        id: 4,
        title: "Quarto post",
        body: "O método find devolve o primeiro item encontrado."
    },
    {
        userid: 3,
        id: 5,
        title: "Quinto post",
        body: "Se nada for encontrado, find devolve undefined."
    }
]

const buscar = document.getElementById("buscar")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")

botao.addEventListener("click", function(){

    const valorDigitado = buscar.value
    resultado.innerHTML = ""
    if (valorDigitado === ""){
        resultado.textContent = "Digite um ID"
        return
    }

    const id = Number(valorDigitado)
    const encontrar = posts.find(function(post){
        return post.id === id
    })

    if (encontrar){
        const titulo = document.createElement("h2")
        titulo.textContent = encontrar.title

        const corpo = document.createElement("p")
        corpo.textContent = encontrar.body

        resultado.appendChild(titulo)
        resultado.appendChild(corpo)
    }else{
        resultado.textContent = "Posto não encontrado (ID " + id + "). Os IDs válidos vão de 1 a 5."

        resultado.classList.add("erro")
    }
})