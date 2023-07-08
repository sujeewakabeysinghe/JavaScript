document.getElementById('js-4').onclick = function() {
    let t;
    if(document.getElementById('js-2').checked) {
        t = document.getElementById('js-1').value;
        t = Number(t);
        toF(t);
        console.log(t, 'F');
    } else if(document.getElementById('js-3').checked) {
        t = document.getElementById('js-1').value;
        t = Number(t);
        toC(t);
        console.log(t, '°c');
    } else {
        console.log('Something Wrong!')
    }
}

function toC(t) {
    return (t-32)*(5/9);
}

function toF(t) {
    return t*9/5+32; //ckeck logic
}