var respostas = '';
var texto = document.querySelector('span');

while(respostas == ''){ // || respostas == null
    respostas = prompt('Você gosta de golfinho?');
}

if(respostas == null){
texto.textContent = 'não sei'
}else{
texto.textContent = respostas;
}


