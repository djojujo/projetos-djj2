var respostas = '';
var texto = document.querySelector('span');

texto.textContent = respostas;

while(respostas == ''){
    respostas = prompt('Você gosta de golfinho?');
}