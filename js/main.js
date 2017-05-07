function Misquad(nombre,apellido,edad,hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.imagen = new Image();
	this.imagen.src = "images/" + this.nombre + ".jpg";

	this.mostrarMisquad = function(){
		var contenedor = document.getElementById('contenedor');
		contenedor.innerHTML = "Nombre: " + this.nombre + "<br>" + "Apellido: " + this.apellido + "<br>" + "Edad: " + this.edad + "<br>" + "Hobbies: " + this.hobbies.join(" - ");
	}
	this.mostrarImagen = function() {
		var contenedor = document.getElementById('picture');
		contenedor.innerHTML = "<li><img src='" + this.imagen.src + "' title='" + this.nombre +"'><h3>" + this.nombre + "</h3></li>";
  }
}
const rangi = new Misquad("Rangi","Becerra",32,["Viajar"]);
const genesis= new Misquad("Génesis","Narváez",27,["Pasear en Bici"]);
const rosa= new Misquad("Rosa","Díaz",32,["Pensar en la inmortalidad del cangrejo"]);
const caterina= new Misquad("Caterina","Da Silva",26,["Juegos Online"]);
const constanza= new Misquad("Constanza","Pecori",26,["Tejer", "Comer", "Dormir"]);
const laura= new Misquad("Laura","Pelaéz","Underfined",["Cinéfila"]);
const orieta= new Misquad("Orieta","Toro",27,["leer", "Dormir"]);
const camila= new Misquad("Camila","González",26,["ver Netflix", "Jugar con Mascotas", "Degustar Cervezas"]);
//document.getElementById("contenedor").innerHTML = rangi.mostrarMisquad() + genesis.mostrarMisquad() + rosa.mostrarMisquad() + caterina.mostrarMisquad() + constanza.mostrarMisquad();
//document.write("<div class= contenedor>" + rangi.mostrarMisquad() + "</div>");

var res = [rangi,genesis,rosa,caterina,constanza,laura,orieta,camila];

res.forEach(function(element){

});
