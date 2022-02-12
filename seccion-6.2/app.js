// let carro1 = {
//     marca: 'Toyota',
//     tipo: 'Sedan',
//     puertas: 3
// };

// class Carro {
//     constructor(marca1, tipo1, puertas){
//         this.marca = marca1;
//         this.tipo = tipo1;
//         this.puertas = puertas;
//         this.creadoEn = 'hoy'
//     }
// }

// let carro2 = new Carro('Mazda', 'Sedan', 2);
// let carro3 = new Carro('Toyota', 'Fortuner', 5);







class Carro {
    constructor(marca1, tipo1, puertas){
        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas = puertas;
        this.creadoEn = 'hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro(){

        if( this.encendido){
            console.error('EL vehiculo YA se encuentra encendido');
        }else{
            this.encendido = true;
            return 'El carro ya esta encendido';
        }
        return this;
    }

    realizarViaje(consumo){

        if(!this.encendido) return console.log('Carro apagado');

        if(consumo > this.gasolina) return console.log('No puede realizar el viaje: Gasolina ' + this.gasolina);
        
            this.gasolina = this.gasolina - consumo;
            return ' Le queda ' + this.gasolina + ' de combustible';
    }
    
}

let carro = new Carro('Mazda', 'Sedan', 2);

console.log(carro);