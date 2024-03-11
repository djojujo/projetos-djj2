let numeroSecreto = Math.random;

let chute = prompt('Escola um numero de 0 a 20');

while (chute == '' || chute == null){
   chute = prompt('Escola um numero de 0 a 20');

}

if(numeroSecreto == chute){
alert('Parabens,voce acertou!!!!');
}else{
    alert('Que triste, você errou :(');
}
    
