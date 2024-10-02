document.getElementById("BotonIniciarC++").onclick = async function() {
    resposta = await fetch('./cgi-bin/test.cgi');
    data = await resposta.text();
    document.getElementById("ResultadoC++").innerHTML = `${data}`;
}