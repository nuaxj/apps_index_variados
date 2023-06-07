function bienvenido(){

	return "Hola biemvemido a la seccion de funciones";

}

var Mensaje= bienvenido();

console.log(Mensaje);


function Cuadrado_de_Numero(Num){

	var Resultado = Num * Num;

	return Resultado;

}

var Num= 3;

var Valor= Cuadrado_de_Numero(Num);

console.log(Valor);

console.log(Cuadrado_de_Numero(5));


function Conversor_Grados(Fah){

	var Conversor= ((Fah - 32) *5)/9;
		return Conversor;
}

var Fah= 32;

var Fah2= Conversor_Grados(68);

var Respuesta= Conversor_Grados(Fah);

console.log("Los grados en celsius son de: " +Respuesta+ ".");

console.log("Los grados en celsius de la segunda temperatura son de : " +Fah2+ ".");