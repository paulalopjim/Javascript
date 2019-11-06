function potenciaRecursiva(num,exp){
    if(exp!=0){
       return num*potenciaRecursiva(num,exp-1); 
    }
    return 1;
}
document.write(potenciaRecursiva(4,3));