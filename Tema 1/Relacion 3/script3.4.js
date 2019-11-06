var n1=parseInt(prompt("Escribe el radio de la circunferencia"));
document.write("El valor del radio es = "+n1+"<br>");
function calcCircumference(radio){
    var circu=((radio*2)/Math.PI);
    document.write("El valor de la circunferencia es= "+circu+"<br>");
}
calcCircumference(n1);
function calcArea(radio){
    var area=((Math.pow(radio,2))*Math.PI);
    document.write("El valor del area es="+area+"<br>");
}
calcArea(n1);