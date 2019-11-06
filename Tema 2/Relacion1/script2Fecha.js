var f=new Date();
var fechaHoy=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
document.write(fechaHoy+"</br>");
var fecha85=(f.getDate()+85) + "/" + (f.getMonth() +1) + "/" + (f.getFullYear()+2);
document.write(fecha85+"</br>");
var fecha197=(f.getDate()-197) + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
document.write(fecha197+"</br>");
