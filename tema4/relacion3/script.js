function nombre(event){
    nombre= event.target.value;
    valor=new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
    if (valor.test(nombre)){
        event.target.style.backgroundColor='green';
    }else{
        event.target.style.backgroundColor='red';
        
    }
    
}
function correo(){
    compcorreo=new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$");
    if(compcorreo.test(email.value)){
        
    }else {

    }
}
function tlf(){

}

