function esfera(radio){
  var volumen=(4/3)*Math.PI*Math.pow(radio,3);
  return volumen;
}
var resultado=esfera(4);
document.write(resultado);