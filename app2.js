var Peso_Luis= 72; 

var Altura_Luis= 1.72;

var Peso_Carlos= 89;

var Altura_Carlos= 1.75;

var IMC_Luis;

var IMC_Carlos;

IMC_Luis= Peso_Luis/(Altura_Luis*Altura_Luis);

console.log("El IMC de Luis es de : " + IMC_Luis+ ".")

IMC_Carlos= Peso_Carlos/(Altura_Carlos*Altura_Carlos);

console.log("El IMC de Carlos es de : " +IMC_Carlos+ ".")

if (IMC_Carlos >= IMC_Luis) {
	console.log("El IMC de Carlos es mayor que el de Luis.")
}else if (IMC_Carlos <= IMC_Luis) {
	console.log("El IMC DE Carlos es menor que el de Luis.")
}






