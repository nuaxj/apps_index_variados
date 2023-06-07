var Prueba= function(Nombre){

	return "hola " +Nombre;

}

console.log(Prueba("juan"));


var A;

A= null;

var ValorNulo=function(A){

	return A;

}

console.log(A);


function Sumar(a, b, c=3){

		return a + b + c;

}

console.log(Sumar(10, 4));


var Nombre= "juan";

console.log(`El nombre es ${Nombre}.`);


var d= 5;

var e= 10;

console.log(`La suma es de ${d+e}.`);