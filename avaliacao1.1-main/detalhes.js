const parametros = new URLSearchParams(window.location.search);
const idProduto = parametros.get("id");
const secaoDetalhes = document.getElementById("detalhes-produto");

function exibirDetalhes(produto) {
    secaoDetalhes.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";
    card.style.textAlign = "center";

    const imagem = document.createElement("div");
    imagem.className = "img-card";
    imagem.style.backgroundImage = `url("${produto.imagem}")`;
    imagem.style.margin = "0 auto";

    const corpo = document.createElement("div");
    corpo.className = "card-body";

    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = produto.produto;

    const descricao = document.createElement("p");
    descricao.className = "card-text";
    descricao.textContent = produto.descricao;

    const restaurante = document.createElement("h6");
    restaurante.textContent = `Restaurante: ${produto.restaurante}`;

    const botaoPedido = document.createElement("a");
    botaoPedido.href = "#";
    botaoPedido.className = "btn btn-danger piscar";
    botaoPedido.textContent = "Realizar pedido";
    botaoPedido.addEventListener("click", () => {
        alert("Pedido realizado!");
    });

    corpo.appendChild(titulo);
    corpo.appendChild(descricao);
    corpo.appendChild(restaurante);
    corpo.appendChild(botaoPedido);
    card.appendChild(imagem);
    card.appendChild(corpo);

    const tituloFormulario = document.createElement("h4");
    tituloFormulario.textContent = "Deseja receber promoções deste pedido?";

    const formulario = document.createElement("form");

    const grupoEmail = document.createElement("div");
    grupoEmail.className = "mb-3";

    const rotuloEmail = document.createElement("label");
    rotuloEmail.className = "form-label";
    rotuloEmail.textContent = "Seu e-mail";

    const campoEmail = document.createElement("input");
    campoEmail.type = "email";
    campoEmail.className = "form-control";
    campoEmail.placeholder = "Digite seu e-mail";
    campoEmail.required = true;

    grupoEmail.appendChild(rotuloEmail);
    grupoEmail.appendChild(campoEmail);

    const grupoTermos = document.createElement("div");
    grupoTermos.className = "form-check mb-3";

    const caixaTermos = document.createElement("input");
    caixaTermos.className = "form-check-input";
    caixaTermos.type = "checkbox";
    caixaTermos.id = "termos";
    caixaTermos.required = true;

    const rotuloTermos = document.createElement("label");
    rotuloTermos.className = "form-check-label";
    rotuloTermos.htmlFor = "termos";
    rotuloTermos.textContent = "Aceito os termos de uso";

    grupoTermos.appendChild(caixaTermos);
    grupoTermos.appendChild(rotuloTermos);

    const botaoEnviar = document.createElement("button");
    botaoEnviar.type = "button";
    botaoEnviar.className = "btn btn-success";
    botaoEnviar.textContent = "Enviar";
    botaoEnviar.addEventListener("click", () => {
        if (campoEmail.checkValidity() && caixaTermos.checked) {
            alert("E-mail cadastrado com sucesso!");
        } else {
            alert("Preencha seu e-mail e aceite os termos de uso.");
        }
    });

    formulario.appendChild(grupoEmail);
    formulario.appendChild(grupoTermos);
    formulario.appendChild(botaoEnviar);

    card.appendChild(tituloFormulario);
    card.appendChild(formulario);

    secaoDetalhes.appendChild(card);
}

// Busca o produto pelo ID e mostra os detalhes na página
function carregarDetalhes() {
    if (!idProduto) {
        const aviso = document.createElement("p");
        aviso.textContent = "Nenhum produto selecionado. Escolha um prato no cardápio.";
        secaoDetalhes.appendChild(aviso);
        return;
    }

    fetch(`https://tech4produtos.fly.dev/produtos/${idProduto}`)
        .then(resposta => resposta.json())
        .then(produto => exibirDetalhes(produto));
}

carregarDetalhes();
