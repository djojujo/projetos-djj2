var respostas = ''; //variavel da resposta que o site pergunta//
var texto = document.querySelector('span');//variavel aonde eu consigo achar o span//

while(respostas == ''){ // || respostas == null
    respostas = prompt('Você gosta de golfinho?');
}//enquanto o resposta estiver nulo ou quando tiver uma resposta//

if(respostas == null){
texto.textContent = 'não sei'
}else{
texto.textContent = respostas;
}//e se for nulo a resposta 'não sei' aparecera//
//serve para colocar o site de folga para o site funcionar//