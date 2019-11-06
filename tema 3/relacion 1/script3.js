var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
function aleatorio(){
    for (var i=1;i<=6000;i++){
    let numero=Math.trunc(Math.random()*(7-1)+1);
        if (numero==1){cont1++;
        }if (numero==2){cont2++;
        }if (numero==3){cont3++;
        }if (numero==4){cont4++;
        }if (numero==5){cont5++;
        }if (numero==6){cont6++;
        }            
}
document.write("veces 1= "+cont1);
document.write("veces 2= "+cont2);
document.write("veces 3= "+cont3);
document.write("veces 4= "+cont4);
document.write("veces 5= "+cont5);
document.write("veces 6= "+cont6);
}
aleatorio();
