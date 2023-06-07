var Persona= {

	// Propiedades


	Nombre: "juan",

	Apellido: "Garcia",

	Gustos: ["futbol", "play", "Peliculas" ],

	Trabajo: "programador",

	Es_Casado: false,

	Nacido: 1996,

	// Metodo:

	Calculad_Edad: function(){

			this.Edad= 2022 - this.Nacido;

	}


};

Persona.Calculad_Edad();

console.log(Persona);