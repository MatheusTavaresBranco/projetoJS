const contador = document.getElementById("contador");

function atualizarContador() {
    const agora = new Date();

    const meiaNoite = new Date(agora);
    meiaNoite.setDate(meiaNoite.getDate() + 1);
    meiaNoite.setHours(0, 0, 0, 0);

    let diferenca = meiaNoite - agora;

    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    contador.textContent = `As ofertas exclusivas terminam em: ${String(horas).padStart(2, "0")}:${String(
        minutos
    ).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

atualizarContador();
setInterval(atualizarContador, 1000);
