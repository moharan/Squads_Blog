function Misquad(id,nombre,apellido,edad,hobbies){
	this.id = id;
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.imagen = new Image();
	this.imagen.src =  this.id;
	//
	this.mostrarMisquad = function(){
		return "<img src='images/" + this.imagen.src + "_squad.jpg'>" + "<br>Nombre: " + this.nombre + "<br>" + "Apellido: " + this.apellido + "<br>" + "Edad: " + this.edad + "<br>" + "Hobbies: " + this.hobbies.join(" - ") + "<br><br>";
	}
	this.mostrarImagen = function() {
  	}
  	this.mostrarComentarios = function(){
		return "<textarea>" + Comentario + "</textarea>";
		//"</textarea><button type='button' onclick='agregarComentario()'>Comentar</button><p id='demo'></p>;
	}
}
const rangi = new Misquad(1,"Rangi","Becerra",32,["Viajar"]);
const genesis= new Misquad(2,"Génesis","Narváez",27,["Pasear en Bici"]);
const rosa= new Misquad(3,"Rosa","Díaz",32,["Pensar en la inmortalidad del cangrejo"]);
const caterina= new Misquad(4,"Caterina","Da Silva",26,["Juegos Online"]);
const constanza= new Misquad(5,"Constanza","Pecori",26,["Tejer", "Comer", "Dormir"]);
const laura= new Misquad(6,"Laura","Pelaéz","Underfined",["Cinéfila"]);
const orieta= new Misquad(7,"Orieta","Toro",27,["leer", "Dormir"]);
const camila= new Misquad(8,"Camila","González",26,["ver Netflix", "Jugar con Mascotas", "Degustar Cervezas"]);
//document.getElementById("contenedor").innerHTML = rangi.mostrarMisquad() + genesis.mostrarMisquad() + rosa.mostrarMisquad() + caterina.mostrarMisquad() + constanza.mostrarMisquad();

var res = [rangi,genesis,rosa,caterina,constanza,laura,orieta,camila];

var perfilSquad = document.getElementById("contenedor") ;
//var avatar = document.getElementById("avatar");

//var imprimir = "";

res.forEach(function(element){
	return perfilSquad.innerHTML += element.mostrarMisquad();
});
console.log(Misquad);
console.log(rangi);
console.log(res);

