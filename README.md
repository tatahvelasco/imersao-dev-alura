# 📚 Base de Conhecimento de Tecnologia

Este projeto é uma **Base de Conhecimento** interativa e pesquisável, desenvolvida durante as aulas da **Imersão Dev** da Alura em parceria com o **Google Gemini**. O objetivo principal é criar um recurso dinâmico para catalogar e visualizar tecnologias, frameworks e conceitos importantes no universo do desenvolvimento de software.

## ✨ Visão Geral do Projeto

A aplicação carrega dados de um arquivo JSON e os renderiza como cartões (cards) de informação em uma interface web moderna. O principal recurso de valor é a **funcionalidade de busca em tempo real**, que permite aos usuários filtrar o conteúdo rapidamente por nome ou descrição da tecnologia.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando um *stack* de desenvolvimento web tradicional e minimalista:

* **HTML5 (`index.html`):** Estrutura semântica da página.
* **CSS3 (`style.css`):** Estilização moderna e responsiva (Mobile First), utilizando variáveis CSS e a fonte Quicksand.
* **JavaScript Puro (`script.js`):**
    * Manipulação do DOM.
    * Requisição assíncrona (`fetch`) para carregar o arquivo `data.json`.
    * Lógica de filtragem e busca de conteúdo.
* **JSON (`data.json`):** Fonte de dados estruturada contendo informações sobre diversas tecnologias (linguagens, frameworks, bancos de dados, metodologias, etc.).

## ⚙️ Funcionalidades

* **Carregamento de Dados:** Carrega de forma assíncrona uma lista de itens de tecnologia a partir do arquivo `data.json` no carregamento da página.
* **Renderização Dinâmica:** Cria e insere dinamicamente os cartões de informação (cards) no DOM.
* **Busca em Tempo Real:** Filtra a lista de cartões com base no termo digitado no campo de busca (pesquisa por **nome** ou **descrição**).
* **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela (desktop e mobile).

## 🖥️ Como Usar (Modo de Uso)

### Pré-requisitos

Você só precisa de um **navegador web** moderno (Chrome, Firefox, Edge, etc.).

### 1. Clonar o Repositório

Como o projeto é totalmente frontend, você pode cloná-lo e executá-lo localmente:

```bash
git clone https://github.com/tatahvelasco/imersao-dev-alura.git
cd imersao-dev-alura
```

### 2. Executar a Aplicação

Basta abrir o arquivo `index.html` no seu navegador. 
Não é necessário um servidor web, embora você possa usar extensões como Live Server no VS Code para facilitar.

### 3. Utilizar a Busca

  1. Digite o nome de uma tecnologia (ex: `Python`, `React`) ou uma palavra-chave (ex: `backend`, `framework`, `nosql`) no campo de busca.

  2. Clique no botão "Buscar" ou use o evento `onkeyup` para buscar instantaneamente (o evento de busca é atualmente ativado via `onclick` no botão).

Os cartões exibidos serão filtrados em tempo real de acordo com o termo.

## 🗺️ Estrutura de Arquivos

```
base-de-conhecimento-tech/
├── index.html       # Estrutura HTML da aplicação
├── style.css        # Estilização e responsividade
├── script.js        # Lógica de carregamento e busca de dados
└── data.json        # Fonte de dados (lista de tecnologias)
```

## 🧠 Detalhes Técnicos em `script.js`

A lógica central de carregamento de dados e busca é implementada no `script.js`:

### Carregamento Otimizado

A função `carregarDados()` utiliza uma otimização simples para garantir que a requisição ao `data.json` seja feita apenas uma vez, armazenando os dados na variável global `dados`.

```
// Função para carregar os dados do JSON apenas uma vez.
async function carregarDados() {
    if (dados.length === 0) { // Carrega os dados apenas se o array estiver vazio
        // ... lógica de fetch e atribuição a 'dados'
    }
}
```

### Lógica de Busca

A função `iniciarBusca()` realiza a filtragem:

   1. Converte o termo de busca e as propriedades `nome` e `descricao` para minúsculas (`toLowerCase()`) para garantir que a busca não diferencie maiúsculas de minúsculas.

   2. Usa o método `filter()` do JavaScript para criar um novo array apenas com os itens que correspondem ao termo.

   3. Chama `renderizarCards()` com os resultados.

```
function iniciarBusca() {
    const termoBusca = campoBusca.value.toLowerCase();
    const resultados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    );
    renderizarCards(resultados);
}
```

## 🔗 Sobre a Imersão Dev Google Gemini / Alura

Este projeto foi desenvolvido com base nos conhecimentos e desafios propostos pela Imersão Dev (edição com Google Gemini), um evento educacional focado em ensinar e aplicar o desenvolvimento de software e conceitos de inteligência artificial/APIs.

  * Página Oficial: https://www.alura.com.br/imersao-dev-google
