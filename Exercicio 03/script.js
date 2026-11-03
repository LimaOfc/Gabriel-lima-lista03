const formulario = document.getElementById("formulario")
const json = document.getElementById("json")
const tabela = document.getElementById("tabela")

formulario.addEventListener("submit", function(){
    event.preventDefault()
    const dados = new FormData(formulario)

    const aluno = {}

    for(const [chave, valor] of dados){
        aluno[chave] = valor
    }

    json.textContent = JSON.stringify(aluno, null, 2)

    const linha = document.createElement("tr")

    const nome = document.createElement("td")
    nome.textContent = aluno.nome

    const email = document.createElement("td")
    email.textContent = aluno.email

    const idade = document.createElement("td")
    idade.textContent = aluno.idade

    const curso = document.createElement("td")
    curso.textContent = aluno.curso

    linha.appendChild(nome)
    linha.appendChild(email)
    linha.appendChild(idade)
    linha.appendChild(curso)

    tabela.appendChild(linha)

    formulario.reset()
})