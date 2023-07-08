let a;
let w = window.prompt('Width :');
let h = window.prompt('Height :');
w = Number(w);
h = Number(h);


funOne();

function funOne() {
    a = funTwo(w, h);
    if(isNaN(a)) {
        console.log(a);
    } else {
        console.log('Area :', a);
    }
}

function funTwo(w, h) {
    if(isNaN(w*h)) {
        return 'Enter Numbers!';
    } else {
    return w*h;
    }
}