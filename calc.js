function addtoinput(ele){
    document.getElementById('up').value+=ele;
}

function erase(){
    document.getElementById('up').value="";
}

function equall(){
console.log(document.getElementById('up').value);
console.log(eval( document.getElementById('up').value));
try{
let ans = eval( document.getElementById('up').value);
document.getElementById('up').value=ans;}
catch{
    document.getElementById('up').value="invalid";
}
}