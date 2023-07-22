let a = 10;
let b = 'MSG'
let c = '!'

setTimeout(msgOne, 3000, a, b, c);
// setTimeout( () => console.log('Message One!', b, a, c), 3000, a, b, c);
setTimeout(msgTwo, 5000);
let timerID = setTimeout(msgThree, 5000);
setTimeout(msgFour, 3000);
console.log(timerID);
clearTimeout(timerID);

function msgOne(a, b) {
    console.log('Message One!', b, a, c);
}

function msgTwo() {
    console.log('Message Two!');
}

function msgThree() {
    console.log('Message Three!');
}

function msgFour() {
    console.log('Message Four!');
}