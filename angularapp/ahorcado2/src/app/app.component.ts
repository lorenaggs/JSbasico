import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  palabrasNuevas = ['ELEFANTE', 'COCODRILO', 'ZORRO', 'SAPO', 'RINOCERONTE', 'TORTUGA', 'DELFIN', 
                    'SERPIENTE', 'TIBURON', 'CALAMAR', 'BALLENA'];

  indexAleatorio = Math.round(Math.random()*10);

  palabra = this.palabrasNuevas[this.indexAleatorio];
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    this.palabraOculta = '_ '.repeat( this.palabra.length );
  
  }
  comprobar( letra: string ){

    this.existeLetra(letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');

    // console.log( palabraOcultaArr );

    for( let i = 0; i < this.palabra.length; i++){
      if( this.palabra[i] === letra ){
        palabraOcultaArr[i] = letra;
      }
    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    if(palabraEvaluar === this.palabra){
      this.gano = true;
      console.log('Usuario GANO');
    }

    if(this.intentos > this.palabra.length){
      this.perdio = true;
      console.log('Usuario perdio');
    }

    

  }

  existeLetra (letra: string ){
    if( this.palabra.indexOf( letra ) >= 0){
      // console.log('Letra existe ' + letra);
    }else{
      // console.log('Letra NO existe ' + letra);
      this.intentos ++;
    }
  }
} 
