let n1= prompt('Escriba la nota');
switch (n1){
    case 1:
    case 2:
    case 3:
    case 4:document.write("insuficiente");
    case 5:document.write("suficiente");
    case 6:document.write("bien");
    case 7:
    case 8:document.write("notable");
    case 9:
    case 10:document.write("sobresaliente");
    default:    document.write("Eso no es un tipo de nota");
}
/*if(n1<5){document.write("insuficiente");}
if(n1==5){document.write("suficiente");}
if(n1==6){document.write("bien");}
if(n1==7 || n1==8){document.write("notable");}
if(n1==9 || n1==10){document.write("sobresaliente");}*/
