var respostas = '';
var texto = document.querySelector('span');

while(respostas == ''){
    respostas = prompt('Você gosta de golfinho?');
}

texto.textContent = respostas;
