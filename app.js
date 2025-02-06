//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
const amigos = [];

function adicionarAmigo() {
    const nomeDoAmigo = document.getElementById("amigo");
    const nome = nomeDoAmigo.value.trim();

    // Verificação se o campo está vazio
    if (!nome) {
        alert("Amigão, coloca um nome aí!");
        return;
    }

    // Adiciona o nome do amigo no array
    amigos.push(nome);
    console.log(amigos);

    // Limpa o campo de entrada
    nomeDoAmigo.value = "";
    
    // Atualiza a lista de amigos na tela
    exibirAmigos();
}

function exibirAmigos() {
    const lista = document.querySelector("#listaAmigos"); 

    // Limpa a lista antes de atualizar
    lista.innerHTML = "";

    // Adiciona cada amigo na lista de forma otimizada
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) { 
        alert("Não há amigos suficientes para sortear. Adicione mais amigos.");
        return;
    }

    // Sorteia um amigo aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.querySelector("#resultado");

    // Exibe o resultado do sorteio
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
