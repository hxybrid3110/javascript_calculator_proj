function addtoinput(ele){
    document.getElementById('up').value+=ele;
}

function erase(){
    document.getElementById('up').value="";
}

function equall(){
try{
    document.getElementById('up').value = eval( document.getElementById('up').value);}
catch(error){
    document.getElementById('up').value="invalid";
}
}