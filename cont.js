const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');


for (let djojujo = 0; djojujo < botoes.length; djojujo++) {
    botoes[djojujo].onclick = function () {
        for (let djj = 0; djj < botoes.length; djj++) {
            botoes[djj].classList.remove('ativo');
            textos[djj].classList.remove('ativa');
        }
        botoes[djojujo].classList.add('ativo');
        textos[djojujo].classList.add('ativa');
    }
}

const contadores = document.querySelectorAll('.contador');
let tempoAtual = new Date();
let tempoObjetivo1 = new Date('2024-04-30T00:00:00');
let tempoObjetivo2 = new Date('2024-05-30T00:00:00');
let tempoObjetivo3 = new Date('2024-06-30T00:00:00');
let tempoObjetivo4 = new Date('2024-12-13T00:00:00');

let tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

for (let djojujo = 0; djojujo < contadores.length; djojujo++) {
    contadores[djojujo].textContent = CalculaTempo(tempos[djojujo]);
}

function CalculaTempo(tempoObjetivo) {
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
}
