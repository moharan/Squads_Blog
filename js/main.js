function Misquad(id,nombre,apellido,edad,hobbies){
	this.id = id;
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	//this.imagen = new Image();
	//this.imagen.src =  this.id;
	//this.mostrarMisquad = function(){
	//	return "<img src='images/" + this.imagen.src + "_squad.jpg'>" + "<br>Nombre: " + this.nombre + "<br>" + "Apellido: " + this.apellido + "<br>" + "Edad: " + this.edad + "<br>" + "Hobbies: " + this.hobbies.join(" - ") + "<br><br>";
	//}
	//this.mostrarImagen = function() {
  	//}
  	//this.mostrarComentarios = function(){
	//	return "<textarea>" + Comentario + "</textarea>";
	//"</textarea><button type='button' onclick='agregarComentario()'>Comentar</button><p id='demo'></p>;
	//}
}

var comentario=[];

function Comentario(idGente, comentarios,likes){
	this.idGente=idGente;
	this.comentarios=comentarios;
	this.likes=likes;
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

//var perfilSquad = document.getElementById("contenedor") ;
//var avatar = document.getElementById("avatar");
//var imprimir = "";

function imprimir(gente){
	var contiene= document.getElementById("contenedor");
	var texto= "";
	res.forEach(function(gente){
		texto +=
		"<div>" + "<br><img src=images/" + gente.id + "_squad.jpg>" + "</div>" + "<div>" + gente.nombre + "<br>" + gente.apellido + "<br>" + gente.edad + "<br></div>"
	
		gente.hobbies.forEach(function(hobbies){

		texto += "<li>" + hobbies + "</li>";

		texto += "<h3> Comentarios </h3>" + "<div id ='" + gente.id + "'>" + "</div>" + "<textarea id='texto'>" + "</textarea>" + "<button class='onclick='agrega(" + gente.id + ")' width= 100px></button>" +
			"<div id='contenido'>"+"</div>";
		
		});
		

	});
	contiene.innerHTML = texto;
}
//agregar los comentarios
function agrega(genteI){
 var textArea= document.getElementById("texto" + genteI.toString()).value;
 var cajaComentario= document.getElementById("contenido" + genteI.toString());

	var coment= new Comentarios(genteI,textArea,0);

	comentario.push(coment);

	cajaComentario.innerHTML += coment.comentarios;
	 // para limpiar el comentario
	 textArea="";
}

imprimir();

console.log(Misquad);
console.log(rangi);
console.log(res);

