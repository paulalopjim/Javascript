function mover(event){
    var x= event.clientX;
    var y= event.clientY;
   document.getElementById('coord').innerHTML= x+'-'+y;
}