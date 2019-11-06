var n1=parseInt(prompt("Escribe la temperatura en celsius"));
var n2=parseInt(prompt("Escribe la temperatura en farenheit"));
function celsiusToFaren(){
var faren=((n1*(9/5))+32);
document.write(n1+"ºC "+faren+"ºF <br/>");
}
celsiusToFaren(n1);
function farenToCelsius(){
var celsius=((n2-32)*(5/9));   
document.write(n2+"ºF "+celsius+"ºC <br/>");
}
farenToCelsius(n2);