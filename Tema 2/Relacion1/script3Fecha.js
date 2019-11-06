var n1=60;
setTimeout(funcion,3000);
function funcion(){
    document.write(n1);
    n1=n1-1; 
    setTimeout(funcion,3000)
}
