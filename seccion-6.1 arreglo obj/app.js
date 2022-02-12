let persona1 = {
    nombre: 'Lorena',
    edad: 27
};

let persona2 = {
    nombre: 'Melissa',
    edad: 27
};

let persona3 = {
    nombre: 'Juan',
    edad: 40
};

let personas = [ persona1, persona2, persona3 ];


for(let i = 0; i < personas.length; i++){

    // let persona = personas[i];

    console.log(`${personas[i].nombre} -- ${personas[i].edad}`);
}
