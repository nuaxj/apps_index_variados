function Calcular_Edad(YearNacimiento){

	return  2022 - YearNacimiento;

}

function Jubilacion(Edad){

	return 65 - Edad;

}


var Edad= Calcular_Edad(1996);

var Edada_Jubilizacion= Jubilacion(Edad);

console.log("La edad del integrante es: " +Edad+ ".");

console.log("La edad para jublilarse para esta persona es de : " +Edada_Jubilizacion+ ".");