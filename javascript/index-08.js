let a;
let b;
let c;

// a = window.prompt('a :');
// a = Number(a);

// b = window.prompt('b :');
// b = Number(b);

// c = Math.sqrt(Math.pow(a , 2) + Math.pow(b, 2));
// console.log(c);

document.getElementById('js3').onclick = function() {
    a = document.getElementById('js1').value;
    a = Number(a);

    b = document.getElementById('js2').value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a , 2) + Math.pow(b, 2));
    console.log(c);
    document.getElementById('js4').innerHTML = c;
}