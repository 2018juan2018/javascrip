var uno = "el primer numero"
//document.write(uno)
//alert(uno);
//console.log(uno);
var primero = true;
//document.write(typeof primero)
var fe = new Date();
//document.write(fe.getHours()+":", fe.getMinutes());
var sim = Symbol();
//esplicacion de operadores aritmeticos:
var uno = 1;
var dos = 10;
var res = uno+dos;
//moulo
var resmod = uno%dos;
//incremento y decremento
var num = 29;
num++;
/*
||
&&
!
*/
//document.write( !(uno>dos) );

//if, if else, else if estructuras de condicion se usan todas juntas;

/*if (uno==10) {
  document.write("el uno es igual a 10");
}else if(dos == 10){
  document.write("el dos es igual a 10");
}else {
  document.write("ningun numero es igual a 10")
}*/

//switch case: estructura de condicion de varias opciones

/*switch (uno) {
  case 0:
    dos="cero"
    break;
  case 1:
    dos="uno"
    break;
  default: dos="no es ningun numero";
}
document.write(dos);
*/

//while estructura repetitiva

/*while (uno<dos) {
  document.write(dos + "<br>");
  dos--;
  if (uno == dos) {
    document.write("el numero: " + uno + "es igual al numero: " + dos);
  }
}*/

//do while estructura repetitiva realiza una vez la accion

/*
do {
  document.write(dos + "<br>");
  dos--;
  if (uno == dos) {
    document.write("el numero: " + uno + "es igual al numero: " + dos);
  }
} while (uno<dos);
*/
/*do {
  document.write(dos)
} while (uno==dos);
*/

//for estructura repetitiva

/*var res;
var n = 0;
for (var i = 0; i <= 10; i++) {
  res = n*i;
  document.write(i + "x" + n + "=" + res + "<br>");
  n++;
}*/


//funciones


//funciones sin paraetros
/*function msg(){
  var saludo = document.write("pglo a todos");
  return saludo;
};*/
//funciones con parametros numeros van dentro de comillas para imprimirsen
/*function msg2(a, b, c){
  var datos = document.write(" my name ia " + a + " <br> my hobbit is " + b + "<br>im a livein in " + c);
  return datos;
};
msg2("juan", "xbox and smoking", "sogamoso");
*/

//funcion con parametros y sin mostrar errores
/*function msg3(nom=""){
  var nomCom = nom;
  return document.write(nomCom);
};
msg3("pepe martinez");
*/

//funcion validada
/*function msg4(nomb, apell){
if (nomb != null && apell != null) {
  res = document.write(nomb + " ", apell);
}else {
  res = document.write("complete los datos") ;
};
};
msg4("juan", "borda");*/

//funcion con vectores
/*function arr(...mese){
  for(let uno of mese){
    document.write(uno + "<br>");
  }
}
arr("Enero", "Febrero", "Marzo", "Abril", "Mayo")*/

//funcion para enviar parametros o llenar array
/*function parame(nombre, precio, peso){
  return "el nombre es: " + nombre + "<br>su precio es: " + precio + "<br>su peso es: " + peso;
}

var primero = ['soldado', 25, 2];

document.write(parame(...primero));*/

//funcion para llamara funciones sin nombre
/*var siete = function(){
  resp = "hola a todos";
  return resp;
};
document.write( siete() );*/


//funciones para llamar otras funciones con parametros
/*var a = function(nombre, uno){var e = nombre; uno(e);};
var b = function(i){document.write(i);};

a("juan", b);*/

//para llamar funciones con parametros
//la primera o la segunda
/*var pri = nombre => nombre;
var seg = (nombre, apellido)=>nombre + apellido
document.write(seg("juan ", " borda"));*/



//eventos


//eventos del raton

/*
function apretar(){
  alert("hola a todos");
};
function encima(){
  alert("el raton esta encima");
}
function fuera(){
  alert("el raton esta afuera");
}

var eventoUno = document.querySelector(".tres");

eventoUno.addEventListener("click", function(){alert("hola")} );
*/

//eventos de teclado

//window.addEventListener("keydown", function(){alert("esta precionando una tecla del teclado")});
//window.addEventListener("keypress", function(event){alert(event.keyCode)});//para ver el codigo de la tecla
//window.addEventListener("keypress", function(event){alert(String.fromCharCode(event.keyCode))} );//para ver la tecla que selecciona

//elementos de carga
//window.addEventListener("load", function(){alert("elementos cargados")});//cuando se quiere cargar los objetos

//temporisadores
//setInterval
//setTimeout

//funcion para intervalos se ejecuta de corrido
/*
var tiempo = setInterval(
  function(){document.write("texto de ejemplo <br>")},
  2000
);*/

//funcion para hacer funcion una vez se alla cumplido con una funcion

//setTimeout(function(){document.write("segundo texto de pruba")}, 3000);

//eventos multimedia

//evento para cuando se da play
/*
var prim = document.querySelector(".uno");
prim.addEventListener("play", function(){alert("precionaste play")});*/

//evento para cuando se detiene el video
/*
var prim = document.querySelector(".uno");
prim.addEventListener("ended", function(){alert("el video se detubo o se a acabado")});*/

//evento para adelantar el video
/*
var prim = document.querySelector(".uno");
prim.addEventListener("seeking", function(){alert(this.currentTime)});*/

//cuadros de dialogos y ventanas emergentes
//alert
//confirm
//prompt

//alert("esto ha sido una alerta \n pero no se alarme");
//confirm este se usa para tomar el valor que de una ventana de dialogo
/*a = confirm("necesita ayuda?");
if (a) {
  document.write(window.location="ayuda.html");
}else {
  document.write("dijo que no");
}*/

//prompt para solicitar un dato y luego mostrarlo
/*var a = prompt("nombre completo", "esccriba aca el nombre");
if (a) {
  document.write("su nombre es: " + a);
}else if (a == null) {
  document.write("usted cancelo el formulario \n cargra pagina de nuevo para volver a verlo");
}else {
  document.write("usted no puso nada");
}*/


//numeros


//convertir variable de cadena a numero
/*var a = "10.55";
var b = Number(a);
document.write(typeof b);*/

//convertir variable a entero
/*var a = 10.55;
var b = parseInt(a);
document.write( b);*/

//convertir variable en flotante
/*var a = 10.55;
var b = parseFloat(a);
document.write( b);*/

//para validar cuando no es un numeros
/*var a = "hola";
var b = isNaN(a);
document.write( b);
if (a == isNaN ) {
  document.write("la variable no es un numero");
}*/

//para validar cuando si es un numero
/*var a = 15;
var b = Number.isInteger(a);
document.write( b);*/

//para redondear un numero
/*var a = 15.4567891;
var b = a.toFixed(0)//aca se ponen la cantidad de numeros que se le quieren enseñar al usuario
document.write(b);*/

//para convertir un tipo de dato en cadena
/*var a = 15.23456;
var b = a.toString();
document.write(typeof b);*/

//trabajando con cadenas
//length
//indexOf
//lastIndexOf
//match
//substr
//substring
//charAT
//startsWith
//endsWith
//includes

//para ver el numero de caracteres de una cadena esta propiedad cuenta los espacios
/*var a = "hola a todos";
document.write(a.length);*/

//para buscar la posicion de determinasdos caracteres toma el primero que encuentre
/*var a = "hola para todos";
document.write(a.indexOf("para"));*/

//para buscar la posicion de determinasdos caracteres toma el ultimo que encuentre
/*var a = "hola para todos, un buen dia para todos";
document.write(a.lastIndexOf("para"));*/

//para guardar objetro buscado en un array y el /gi es para ver cuantos a almacenado
/*var a = "hola para todos, un buen dia para todos";
document.write(a.match(/para/gi));
//para guardar el array en una variable
var b = a.match(a);*/

//para buscar valores por posiciones de parametro en parametro
/*var a = "hola para todos, un buen dia para todos";
document.write(a.substr(5, 10));*/

//para buscar por posiciones desde el inicio
/*var a = "hola para todos, un buen dia para todos";
document.write(a.substring(5, 10));*/

//para buscar ub solo valores
/*var a = "hola para todos, un buen dia para todos";
document.write(a.charAt(5));*/

//si inicia con un caracter determinasdo
/*var a = "hola para todos, un buen dia para todos";
document.write(a.startsWith("todos"));*/

//si finaliza con determinado caracter
/*var a = "hola para todos, un buen dia para todos";
document.write(a.endsWith("para"));*/

//si hay alguna coinsidencia con otrso caracteres y se le pueden agregar parametros de busqueda con una coma seguida
/*var a = "hola para todos, un buen dia para todos";
document.write(a.includes("pa", 6));*/

//para trabajar con el texto

//repeat
//replace
//slice
//split
//trim
//tolowerCase
//toUpperCase
//concat

//para repetir objetos
/*var a = "hola para todos, un buen dia para todos <br>";
document.write(a.repeat(10));*/

//para remplazar objetos, si se quiere eliminar se dejan las segundas comillas en blanco
/*var a = "hola para todos, un buen dia para todos <br>";
document.write(a.replace("buen", "mal"));*/

//apartir de que posicion quiere mostrar algo
/*var a = "hola para todos, un buen dia para todos <br>";
document.write(a.slice(5));*/

//para convertir una cadena en una array
/*var a = "lunes, martes, miercoles, jueves, viernes";
document.write(a.split());
//para confirmar que es un array la coma es el parametro que identifica los espacios del array o se puede dejar con cualquier cosa hasta con el espacio
console.log( a.split(",") );*/

//para quitar espacios de inicio y final
/*var a = "   hola a todos   ";
document.write( a.trim() );*/

//para convertir todo en minuscula
/*var a = "HOla a todos";
document.write( a.tolowerCase() );*/

//para cobertir todo a mayuscula
/*var a = "hola a todos";
document.write( a.toUpperCase() );*/

//para concatenar texto
/*var a = "hola a todos";
var b = "ya me voy";
var c = " que esten bien";
document.write( a.concat(a, b, c) );*/

//trabajando con array
/*
//definiendo un array con valores con parentesis
var semana = new Array("lunes", "martes","miercoles", "jueves", "viernes");
//definiendo un array con valores con corchete cuadrado
var semanauno = ["lunes", "martes","miercoles", "jueves", "viernes", 12345];
//para mostrar los valores del Array
document.write(semanauno);
//para mostrar los valores del array con parametros
document.write(semanauno[0]);*/

//trabajando con matriz

/*var prim =
[
  100,
  [10, 20, 30, 40, 50,
  [9, 8, 7]],
  [11, 22, 33, 44, 55],
  [12, 23, 34, 45, 56],
  200
];
document.write(prim[0]);*/

//trabajando los Array

//length: para ver el numero de elementos que tenemos en el arrya
/*var prim = [10, 20, 30, 40, 50];
document.write( prim.length );*/

//push: para agregar elementos al Array
/*var prim = [10, 20, 30, 40, 50];
prim.push(60);
prim.push(70);
prim.push(80);
document.write( prim.length );*/

//pop: sacar el ultimo elemento y mostrarlo
/*var prim = [10, 20, 30, 40, 50];
document.write( prim.pop() );*/

//join: convertir arreglo en cadena
/*var prim = [10, 20, 30, 40, 50];
document.write( prim.join() );
document.write(typeof prim);*/

//split: convierte una cadena en un Array
/*var prim = "lunes, martes, miercoles, jueves, viernes";
var dos = prim.split(", ");
document.write( dos.length );*/

//array.from (map): para convertir algo en array desde html
/*var semana = Array.from(document.querySelectorAll(".dias p"));
var crea = semana.map(dia => dia.textContent);
console.log(crea);*/

//sort: para mostrar los objetos del array en orden alfabetico
/*var semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
document.write( semana.sort() );*/

//reverse: los ordena al reves de como estan ubicados
/*var semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
document.write( semana.reverse() );*/

//for in:para buscar o mostrar los elementos del Array
/*var semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
for (let i in semana) {
  document.write( semana[i] + "<br>");
}*/

//forEach: para mostrar los valores en un array con sus indices
/*var semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
semana.forEach(
  (seg, i) => document.write(i + " - " + seg + "<br>")
);*/

//find: para buscar un objeto determinado en el Array
/*var semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
var buscar = semana.find(seg => seg =="martes");
document.write(buscar);*/

//findIndex: para buscra el indice de un objeto en un array
/*var semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
var buscar = semana.findIndex(seg => seg =="martes");
document.write(buscar);*/

//filter: para buscar en un array los elementos que existan asi esten iguales
/*var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "martes"];
var buscar = semana.filter(seg => seg =="martes");
document.write(buscar);*/

//some: para hacer condiciones de busqueda con parametros debuelbe un boleano
/*var semana = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var buscar = semana.some(seg => seg<50);
document.write(buscar);*/


//trabajando objetos

/*
//clase
function perro(nombre, edad, peso){
  this.Nombre = nombre;
  this.Edad = edad;
  this.Peso = peso;

  this.corres = function(){
    document.write("el perro corre");
  }
};
//objetos
var perro2 = new perro("firulays", 4, 2);
var perro3 = new perro("manchas", 7, 1);
//mostrar el objeto
document.write(perro2.Nombre)
//mostrar el metodo del objeto
perro2.corres();*/


//objetos con clases:

/*
class perro{
  constructor(nombre, edad, peso){
    this.Nombre = nombre;
    this.Edad = edad;
    this.Peso = peso;
  }
  corre(){
    document.write("el perro corre");
  }
};
var perro2 = new perro("firulays", 4, 2);
var perro3 = new perro("manchas", 7, 1);

perro2.corre();
*/


//HERENCIA

/*
class animal {
  constructor(tipo, raza) {
      this.Tipo = tipo;
      this.Raza = raza;
  }
};
class domesticos extends animal{
  constructor(Tipo, nombre, edad, peso) {
    super(Tipo)
    this.Nombre = nombre;
    this.Edad = edad;
    this.Peso = peso;
  }
};
var animal1 = new domesticos("hogareño", "sacha", 8, 6);
var animal2 = new domesticos("casa", "jorch", 2, 5);

document.write( animal1.Tipo, "<br>", animal1.Nombre, "<br>", animal1.Edad, "<br>", animal1.Peso );*/


//BOM (browser object model) Y DOM (document object model)


//BOM

//tamaños
/*
window.name = "NameWindows";
var dato = "el nombre es " + window.name + "<br>";
var ancho = "el ancho es " + window.outerWidth + "<br>";
var alto = "el alto es " + window.outerHeight + "<br>";
var anchoInterno = "el ancho interno es " + window.innerWidth + "<br>";
var altoInterno = "el alto interno es " + window.innerHeight + "<br>";
var scrollHorizontal = "el scroll horizontal es " + window.pageXOffset + "<br>";
var scrollVertical = "el scroll vertical es " + window.pageYOffset + "<br>";
var distanciaIzquierda = "la distancia desde la izquierda es " + window.screenX + "<br>";
var distanciaSuperior = "la distancia desde lo superior es " + window.screenY + "<br>";
document.write(dato, ancho, alto, anchoInterno, altoInterno, scrollHorizontal, scrollVertical, distanciaIzquierda, distanciaSuperior);
*/

//metodos
/*
window.alert("hola a todos");*/
/*
function visitar(){
  var ventana = window.open("ayuda.html", "_blank", "width = 500, height = 300");
};
function cerrar(){
  ventana.window.close();
};
function dimension(){
  ventana.resizeBy(-10, -10);
};
function rediforzosa(){
  ventana.resizeTo(500, 500);
};
function mover(){
  ventana.moveBy(100, 100);
};
function moverforzoso(){
  ventana.moveTo(100, 100);
};
function ponerPrimeras(){
  ventana.focus();
};
function paraImprimir(){
  ventana.print();
};*/


//propiedades de BOM

//alert(window.length);//para ver cuantos iframe tiene en la pagina

/*var historial = window.history;
document.write(historial);*///para ver el historial de navegacion

/*var localizacion = window.location;
document.write(localizacion);*/ //para ver la ubicacion de los elementos

/*var navegador = window.navigator.vendor;
document.write(navegador);*/ //para ver en que navegador estamos

/*var pantalla = window.screen;
console.log(pantalla);*/ //para ver las propiedades de la ventana


//propiedades del DOM

//querySelector
//getElement

/*var a = document.querySelector("#dos");
a.style.color="red";*/ //selecciona lo que quiere eliminar segun clases y id si ya ahy uno escoge el primero nada mas "meter en cajas para seleccionar completo"

/*var a = document.querySelectorAll("p")[1];
a.style.color="red";*/ //para seleccionar como si fuera un array

/*var a = document.getElementById("uno");
a.style.color="red";*/ //para seleccionar con id

/*var a = document.getElementsByClassName("primero")[0];
a.style.color="red";*/ //para seleccionar en forma de array por class

/*var a = document.getElementsByTagName("p")[0];
a.style.color="red";*/ //para seleccionar atravez de la etiquetas

/*var a = document.getElementsByClassName("primero")[0];
a.innerHTML = "NEW TEXT";*/ //para seleccionar y modificar algo

/*var a = document.getElementsByClassName("primero")[0];
a.innerHTML += "new text";*/ //seleccionar y agregar algo nuevo

/*var a = document.getElementsByClassName("primero")[0];
a.className = a.className.replace("primero", "nueva");*/ // para cambiar propiedades de un objeto

/*var a = document.getElementsByClassName("primero")[0];
a.style.color ="green";
a.style.fontFamily ="Arial";*/ //para seleccionar y dar cambios en los estilos

var a = document.getElementById("dos");
function fondo(color){
  if (color == "rojo") {
    a.style.backgroundColor = "red";
  }else if (color == "verde") {
    a.style.backgroundColor = "green";
  }else if (color == "azul") {
    a.style.backgroundColor = "blue";
  }else {}
};
