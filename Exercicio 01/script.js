const usuarios = [
    {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        addres: {city: "Gwenborough"},
        company: {name: "Romaguera-Crona"}
    },
    {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        addres: {city: "Wisokyburgh"},
        company: {name: "Deckow-Crist"}
    },
    {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        addres: {city: "McKenziehaven"},
        company: {name: "Romaguera-Jacobson"}
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        addres: {city: "South Elvis"},
        company: {name: "RRobel-Corkery"}
    }
]

const container = document.getElementById("cards")

//Fazendo um laço de leitura sobre o "Usuarios"
usuarios.forEach(function(user){
    const card = document.createElement("div")
    card.className = "card"

    const nome = document.createElement("h3")
    nome.textContent = user.name

    const email = document.createElement("h3")
    email.textContent = "Email: " + user.email

    const cidade = document.createElement("p")
    cidade.textContent = "Cidade: " + user.addres.city

    const empresa = document.createElement("p")
    empresa.textContent = user.company.name

    card.appendChild(nome)
    card.appendChild(email)
    card.appendChild(cidade)
    card.appendChild(empresa)

    card.addEventListener("click", () => {
        card.classList.toggle("selecionado");
    });

    container.appendChild(card)
})

const total = document.getElementById("total")
total.textContent = "Total de Usuários: " + usuarios.length