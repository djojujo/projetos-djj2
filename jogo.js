let numeroSecreto = Math.random() * 10;

let chute = prompt('Escolha um numero de 0 a 20');

while (chute == '' || chute == null){
   chute = prompt('Escolha um numero de 0 a 20');

}

if(numeroSecreto == chute){
alert('Parabens,voce acertou!!!!');
}else{
    alert('Que triste, você errou :(');
}
    
