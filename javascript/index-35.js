let a = ['d', 'k', 'a'];
let b = [3, 1, 7];
let c = ['r', 'b', 's'];

let x = [
    ['d', 'k', 'a'],
    [3, 1, 7],
    ['r', 'b', 's']
];

let y = [a, b, c];

for( let x1 of x) {
    console.log(x1);
}

for( let y1 of y) {
    // console.log(y1);
    for(let y2 of y1) {
        console.log(y2);
    }
}

y[0][1] = 'replaced';

console.log(y);