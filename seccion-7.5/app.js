let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for(let i = 0; i < numeros.length; i++){

    let numero = numeros[i]%2;

    if(numero === 0 ){
        console.log(numeros[i] + ' es numero par');
    }else{
        console.log(numeros[i] + ' es numero impar');
    }
}
