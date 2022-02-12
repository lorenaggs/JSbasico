function describirPersona(p){
    console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}

let persona = {
    nombre: 'Lorena',
    apellido: 'Guartazaca',
    edad: 27,
    estatura: 1.59
}


describirPersona(persona);