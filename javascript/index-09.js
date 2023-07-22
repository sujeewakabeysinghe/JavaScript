let a = 0;

document.getElementById('js2').onclick = function() {
    a+=1;
    document.getElementById('js1').innerHTML = a;
}

document.getElementById('js3').onclick = function() {
    a=0;
    document.getElementById('js1').innerHTML = a;
}

document.getElementById('js4').onclick = function() {
    a-=1;
    document.getElementById('js1').innerHTML = a;
}