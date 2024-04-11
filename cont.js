const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);



for(let djojujo = 0; djojujo<botoes.length; djojujo++) {
console.log(djojujo);
botoes[djojujo].onclick = function(){
    for(let djj = 0; djj<botoes.length; djj++) {
        botoes[djj].classList.remove('ativo');
    }
botoes[djojujo].classList.add('ativo');
}
}
