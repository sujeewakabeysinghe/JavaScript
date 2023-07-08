let n = Math.ceil(Math.random()*10);
let gc = 0;

document.getElementById('js-2').onclick = function() {
    let g = document.getElementById('js-1').value;
    gc+=1;
    if(n == g) {
        console.log('Corrct!', gc);
    }
    else {
        console.log('Wrong!', gc);
        document.getElementById('js-1').value = '';
    }
}