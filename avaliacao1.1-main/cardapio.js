const URL_PRODUTOS = "https://tech4produtos.fly.dev/produtos/restaurante=VEROCAI";
const listaProdutos = document.getElementById("lista-produtos");

function criarCard(produto) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.className = "card-img-top";
    imagem.alt = produto.produto;
    imagem.height = 200;
    imagem.width = 200;

    const corpo = document.createElement("div");
    corpo.className = "card-body";

    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = produto.produto;

    const descricao = document.createElement("p");
    descricao.className = "card-text";
    descricao.textContent = produto.descricao;

    const botao = document.createElement("a");
    botao.href = `detalhes.html?id=${produto.id}`;
    botao.className = "btn btn-danger";
    botao.textContent = "Ver detalhes";

    corpo.appendChild(titulo);
    corpo.appendChild(descricao);
    corpo.appendChild(botao);
    card.appendChild(imagem);
    card.appendChild(corpo);

    listaProdutos.appendChild(card);
}

fetch(URL_PRODUTOS)
    .then(resposta => resposta.json())
    .then(produtos => {
        listaProdutos.innerHTML = "";
        produtos.forEach(criarCard);
    });
