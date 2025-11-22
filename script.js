const cardConteiner = document.querySelector(".card-container");
const campoBusca = document.querySelector("header input");
let dados = [];

// Função para carregar os dados do JSON apenas uma vez.
async function carregarDados() {
    if (dados.length === 0) { // Carrega os dados apenas se o array estiver vazio
        try {
            const resposta = await fetch("data.json");
            dados = await resposta.json();
            renderizarCards(dados); // Exibe todos os cards inicialmente
        } catch (error) {
            console.error("Erro ao carregar os dados:", error);
        }
    }
}

function iniciarBusca() {
    const termoBusca = campoBusca.value.toLowerCase();
    const resultados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    );
    renderizarCards(resultados);
}

function renderizarCards(cardsParaRenderizar) {
    cardConteiner.innerHTML = ""; // Limpa os cards existentes antes de renderizar os novos
    for (const dado of cardsParaRenderizar) {
        const article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba Mais</a>
        `;
        cardConteiner.appendChild(article);
    }
}

// Carrega os dados assim que a página é aberta
window.addEventListener('load', carregarDados);