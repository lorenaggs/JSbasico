
function max(...arr){
// debugger
arr = [...arr, 1, 2, 3, 4];

console.log(arr);
// const arr = [a, b, c];
let mayor;

    for( let i = 0; i < arr.length; i++){

        if(i === 0){
            mayor = arr[i];
        }

        if( mayor < arr[i]){
            mayor = arr[i];
        }
    }
    return mayor;
}

let mayor = max(9, 5, 16, 4, 6, 10, 20, 15, 18, 35);
console.log('El nummero mayor es ' , mayor);



