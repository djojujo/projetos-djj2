const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');



for(let djojujo = 0; djojujo<botoes.length; djojujo++) {
console.log(djojujo);
botoes[djojujo].onclick = function(){
    for(let djj = 0; djj<botoes.length; djj++) {
        botoes[djj].classList.remove('ativo');
        textos[djj].classList.remove('ativa');
    }
botoes[djojujo].classList.add('ativo');
textos[djojujo].classList.add('ativa');
}
}
const contadores = document.querySelectorAll('.contador');
let tempoAtual =new Date()
new Date ('2024-04-19:00:00')

contadores[0].textContent = tempoObjetivo1 - tempoAtual;;
