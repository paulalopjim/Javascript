var imagen;
imagenPulsada= false;
var posImgx, x, y,posImgy;
function pulsar(event){
    console.log("click");
    imagen=event.target;
    imagenPulsada=!imagenPulsada;
    posImgx = x-imagen.hspace;
    posImgy = y-imagen.vspace;}
function raton(event){
     x=event.clientX;
     y=event.clientY;
    if(imagenPulsada){

   // imagen = document.getElementById("imagen1"); 
     imagen.vspace =y-posImgy;
    imagen.hspace =x-posImgx; 
   // imagen.style.left=x;
   // imagen.style.top=y;
    console.log(imagen);
    }
}
