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
textos[djj].classList.add('ativa');
}
}
