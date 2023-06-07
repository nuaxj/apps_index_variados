var calcularScore = function(nombre, pos, neg){

var porPos= (pos / 100) * 100;
var porNeg = (neg / 100) *100;

if (porPos > 90){

	return nombre+ " tiene el score A";

}else if( porPos >= 70){

	return nombre+ " tiene el score B";

}else if(porPos >= 45){

	return nombre+ " tiene el score C";
}


}

var Resultado = calcularScore("juan", 70, 30);

console.log(Resultado);

