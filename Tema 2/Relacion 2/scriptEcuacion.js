var a=parseInt(prompt("Escribe la variable a"));
var b=parseInt(prompt("Escribe la variable b"));
var c=parseInt(prompt("Escribe la variable c"));
solucion1 = ((-b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);
solucion2 = ((-b) -(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);
document.write(solucion1+"</br>");
document.write(solucion2+"</br>");
