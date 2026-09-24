javascript
function atualizarDados() {

    // DADOS SIMULADOS

    let temperatura =
        Math.floor(Math.random() * 16) + 20;

    let umidade =
        Math.floor(Math.random() * 41) + 40;

    let luminosidade =
        Math.floor(Math.random() * 101);


    // MOSTRAR DADOS NO HTML

    document.getElementById("temperatura").innerText =
        temperatura + " °C";

    document.getElementById("umidade").innerText =
        umidade + " %";

    document.getElementById("luminosidade").innerText =
        luminosidade + " %";


    // ANALISAR TEMPERATURA

    let situacao =
        document.getElementById("situacao");

    let indicador =
        document.getElementById("situacao-indicador");


    indicador.className = "";


    if (temperatura < 25) {

        situacao.innerText = "Normal";
        indicador.classList.add("normal");

    } else if (temperatura < 30) {

        situacao.innerText = "Atenção";
        indicador.classList.add("atencao");

    } else {

        situacao.innerText = "Temperatura alta";
        indicador.classList.add("critico");
    }


    // DATA E HORÁRIO

    let agora = new Date();

    document.getElementById("horario").innerText =
        agora.toLocaleString("pt-BR");
}


// EXECUTA AO ABRIR A PÁGINA

atualizarDados();