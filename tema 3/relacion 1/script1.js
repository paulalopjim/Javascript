function maximo(){
   var mayor=0;
    for(var i=0;i<=4;i++){
        var n1=parseInt(prompt('Escriba un numero'));
        var mayor=n1;
        if(mayor<n1){
            mayor=n1;
        }
        return mayor;
    }

}
var resultado=maximo();
document.write(resultado);