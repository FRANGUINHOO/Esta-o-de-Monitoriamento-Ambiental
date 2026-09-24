
function atualizarDados() {

    let temperatura = Math.floor(Math.random() * 16) + 20;
    let umidade = Math.floor(Math.random() * 41) + 40;
    let luminosidade = Math.floor(Math.random() * 101);

    document.getElementById("temperatura").textContent =
        temperatura + " °C";

    document.getElementById("umidade").textContent =
        umidade + " %";

    document.getElementById("luminosidade").textContent =
        luminosidade + " %";

    let indicador =
        document.getElementById("situacao-indicador");

    let situacao =
        document.getElementById("situacao");

    indicador.className = "";

    if (temperatura < 25) {

        situacao.textContent = "Normal";
        indicador.classList.add("normal");

    } else if (temperatura < 30) {

        situacao.textContent = "Atenção";
        indicador.classList.add("atencao");

    } else {

        situacao.textContent = "Temperatura alta";
        indicador.classList.add("critico");
    }

    let agora = new Date();

    document.getElementById("horario").textContent =
        agora.toLocaleString("pt-BR");
}


/* Atualiza assim que abrir */
atualizarDados();


/* Atualiza automaticamente a cada 5 segundos */
setInterval(atualizarDados, 5000);