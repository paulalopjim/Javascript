if(document.cookie==""){
var nombre= prompt("Cual es tu nombre");
document.cookie="nombre="+nombre;
var color= prompt("Introduce color de fondo");
document.cookie="color="+color;

var fuente=
console.log(document.cookie);
}
var nom=document.cookie;
alert("Hola "+ nom.substring(7,nom.length));
function borrar(){
    document.cookie="nombre=;expires=We,31 Oct 1910 12:15:00 UTC;";
}

