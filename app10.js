var Nota1_Pablo, Nota2_Pablo, Nota3_Pablo;

var Nota1_Maria, Nota2_Maria, Nota3_Maria;

var SumaDividida_Pablo, SumaDividida_Maria;

var Aprobados = 13;

Nota1_Pablo= 14;

Nota2_Pablo= 8;

Nota3_Pablo= 16;

Nota1_Maria= 12;

Nota2_Maria= 18;

Nota3_Maria= 10;

SumaDividida_Pablo=((Nota1_Pablo + Nota2_Pablo + Nota3_Pablo) / 3);

SumaDividida_Maria=((Nota1_Maria + Nota2_Maria + Nota3_Maria) / 3);

for(var i=1; i<=2; i++){
	if(i===1){
		if(SumaDividida_Pablo>13){
			console.log("Pablo esta aprobado");
		}else{
			console.log("Pablo esta suspenso");
		}
	}
	if(i===1){
		if(SumaDividida_Maria>13){
			console.log("Maria esta aprobada");
		}else{
			console.log("Maria esta suspensa")
		}
	}
}

console.log("Esta es la mota meduia de Pablo: " +SumaDividida_Pablo);

console.log("Esta es la nota media de Maria: " +SumaDividida_Maria);

SumaDividida_Pablo >= SumaDividida_Maria ? console.log("La nota de Pablo es mayor a la de Maria. ") : console.log("La nota de Mari a es mayor a la de pablo. ");

