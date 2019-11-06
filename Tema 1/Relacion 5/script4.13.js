var nCeldas=parseInt(prompt("Escribe el numero de celdas de la tabla"));
var altura=parseInt(prompt("Escribe la altura en pixeles"));
var ancho=parseInt(prompt("Escribe el ancho en pixeles"));
document.write("<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>");
document.write("<tr bgcolor = ”white” height= ”"+ancho+"”>");
n=1;
while(n<=nCeldas){
document.write("<td width = ”"+altura+"”> &nbsp ; </td>");
n++;}
document.write("</tr>");
document.write("</table>");