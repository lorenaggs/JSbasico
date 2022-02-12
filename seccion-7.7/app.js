
// function max(a, b, c){

//     let mayor;

//     if(a > b){
//         if (a > c){
//             mayor = a;
//         }else{
//             mayor = c;
//         }
//     }else{
//         mayor = b
//     }
//     return mayor;
// }

// let mayor = max(9, 8, 6);
// console.log (mayor);










// function max(a, b, c){
// debugger

// const arr = [a, b, c];
// let mayor = 0;

//     for( let i = 0; i < arr.length; i++){
//         if( mayor < arr[i]){
//             mayor = arr[i];
//         }
//     }
//     return mayor;
// }

// let mayor = max(9, 5, 16);
// console.log('El nummero mayo es ' , mayor);



function min(a, b, c, d){
    // debugger
    let arr = [a, b, c, d];
    let minimo = 0;

    for( let i = 0; i <= arr.length; i++){
    //     if(i === 0 ){
    //         minimo = arr[i]
    //     }
        i === 0 && minimo == arr[i];
        if( arr[i] <= minimo ){
            minimo = arr[i];
        }
    }
    return minimo;
}

let numeros = min(-2, -1, 20, 14); 

console.log('El nummero menor es ' + numeros);