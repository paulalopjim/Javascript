function normal(){
    document.getElementById('cuerpo').style.backgroundColor='#F3F781';
    document.getElementById('cambia').style.color = 'black';
    document.getElementById('marco').style.borderStyle='solid';
    document.getElementById('marco').style.backgroundColor='#FFFF00';
    document.getElementById('todo').style.borderLeft='40px solid #58D3F7';
    document.getElementById('cambia').style.display='block';
    document.getElementById('enlaces').style.borderStyle='solid';
    document.getElementById('enlaces').style.backgroundColor='#81DAF5';
}
function minimalista(){
    document.getElementById('cambia').style.display='none';
    document.getElementById('cuerpo').style.backgroundColor='white';
    document.getElementById('marco').style.borderStyle='none';
    document.getElementById('cuerpo').style.borderLeft='none';
    document.getElementById('marco').style.backgroundColor='white';
    document.getElementById('enlaces').style.borderStyle='none';
    document.getElementById('enlaces').style.backgroundColor='white';

}