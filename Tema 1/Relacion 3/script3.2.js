var fecha= new Date();
var actual= fecha.getFullYear();
function calcuAge(nac){
edad1=actual-nac;
edad2=(actual-nac)+1;
document.write("Eres"+edad1+"o"+edad2);}
var nac1=parseInt(prompt("Escribe el año que naciste"));
calcuAge(nac1);
var nac2=parseInt(prompt("Escribe el año que naciste"));
calcuAge(nac2);
var nac2=parseInt(prompt("Escribe el año que naciste"));
calcuAge(nac2);