let numeroSecreto = Math.floor(Math.random() * 20);
console.log(numeroSecreto);

let chute = prompt('Escolha um numero de 0 a 20');

while (chute == '' || chute == null){
   chute = prompt('Escolha um numero de 0 a 20');

}

if(numeroSecreto == chute){
alert('Parabens,voce acertou!!!!');
}else{
    alert('Que triste, você errou :(');
}
    
