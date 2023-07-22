let a = 0;
let b = 'Timer ID';

const timerID = setInterval(myFun, 1000, b);
console.log(timerID);

function myFun(b) {
    a+=1;
    console.log('Message', a, b, timerID);
    if(a >= 5) {
        clearInterval(timerID);
    }
}