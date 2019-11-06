var num=parseInt(prompt("Escribe el numero a adivinar"));
num_adivinar=parseInt(prompt("Escribe el numero que creas que es"));
do{
    if(num_adivinar==numero){
        alert("has acertado");
    }
    else if(num_adivinar<num){
        alert("el numero es mas grande");}
    else {
        alert("el numero es mas pequeño");}
        num_adivinar=parseInt(prompt("Escribe el numero que creas que es"));   
}while(num_adivinar!=num)