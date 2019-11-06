var tama=1;
function incrementar(event){
    tama+=0.1;
    document.body.style.fontSize=tama + "em";
}
function decrementar(event){
    tama-=0.1;
    document.body.style.fontSize=tama + "em";
}
function justificar(){
    document.body.style.textAlign='justify';
}
function alinear(){
    document.body.style.textAlign='left';
}