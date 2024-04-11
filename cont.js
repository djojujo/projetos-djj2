const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);



for(let djojujo = 0; djojujo<botoes.length; djojujo++) {
console.log(djojujo);
botoes[djojujo].onclick = function(){
botoes[djojujo].classList.add('ativo');
//botoes[0].classList.remove('ativo');
}
}
