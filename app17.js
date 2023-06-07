var Persona= {

	Nombre: "juan",

	Apellido: "Garcia",

	Gustos: ["futbol", "play", "Peliculas" ],

	Trabajo: "programador",

	Es_Casado: false

};

console.log(Persona.Apellido);

console.log(Persona["Trabajo"]);

Persona.Es_Casado= true;

console.log(Persona.Es_Casado);



// Como crear objetos con object:


var Persona2= new Object();

Persona2.Nombre= "Vane";
Persona2.Apellido= "Lozano";

console.log(Persona2);