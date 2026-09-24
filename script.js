
function atualizarDados(){

    let temperatura =
        Math.floor(Math.random()*16)+20;

    let umidade =
        Math.floor(Math.random()*41)+40;

    let luminosidade =
        Math.floor(Math.random()*101);

    document.getElementById("temperatura").textContent =
        temperatura+" °C";

    document.getElementById("umidade").textContent =
        umidade+" %";

    document.getElementById("luminosidade").textContent =
        luminosidade+" %";

    let situacao =
        document.getElementById("situacao");

    let indicador =
        document.getElementById("situacao-indicador");

    indicador.className="";

    if(temperatura<25){

        situacao.textContent="Normal";
        indicador.classList.add("normal");

    }else if(temperatura<30){

        situacao.textContent="Atenção";
        indicador.classList.add("atencao");

    }else{

        situacao.textContent="Temperatura alta";
        indicador.classList.add("critico");
    }

    document.getElementById("horario").textContent =
        new Date().toLocaleString("pt-BR");
}

atualizarDados();

setInterval(atualizarDados,5000);