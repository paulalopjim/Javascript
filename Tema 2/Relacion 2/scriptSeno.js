document.write("<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>");
for(i=1;i<=10;i++){
    document.write("<tr height= ”500”>");
    document.write("<td>"+i+"</td>");
    document.write("<td>"+Math.sin(i)+"</td>");
    document.write("</tr>");
}
document.write("</table>");