var Nombre= ["Juan", "Pablo", "Vanesa"];

var Verduras= new Array("tomate", "zanahoria", "lechuga");

Nombre[1]="Alex";

console.log(Nombre[1]);

console.log(Nombre[2]);

console.log(Verduras[0]);

console.log(Nombre.length);




// Operaciones con Array


var frutas= new Array("Manzanas", "Peras", "Uva", "Platano");

console.log(frutas);

for(var i=0; i<=frutas.length - 1; i++){

	console.log(frutas[i]);

}


frutas.forEach(function(elemento, indice, array){

	console.log(array);

});


// Añadir elementos:


frutas.push("Naranja");

console.log(frutas);

frutas.unshift("Fresa");

console.log(frutas);

frutas.pop();

console.log(frutas);


frutas.shift();

console.log(frutas);

var pos= frutas.indexOf("Peras");

console.log(pos);

frutas.splice(0,1);

console.log(frutas);


// Poner elementos de diferentes tipos:


var Persona= ["Juan", "Andrés", 25, 633760114, 1.70];

console.log(Persona);


