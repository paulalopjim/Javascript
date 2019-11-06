var nCeldas=parseInt(prompt("Escribe el numero de celdas de la tabla"));
var altura=parseInt(prompt("Escribe la altura en pixeles"));
var ancho=parseInt(prompt("Escribe el ancho en pixeles"));
document.write("<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>");
document.write("<tr height= ”"+ancho+"”>");
n=1;
while(n<=nCeldas){
   
    if(n%2==1)
        document.write("<td width = ”"+altura+"” bgcolor = ”white”> &nbsp; </td>");
    else
    document.write("<td width = ”"+altura+"” bgcolor = ”black”> &nbsp; </td>");
    n++;}
document.write("</tr>");
document.write("</table>");