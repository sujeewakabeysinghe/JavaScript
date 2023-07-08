let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum1(a, b));
console.log(sum2(a, b, c));
console.log(sum(a, b, c, d, e));

function sum1(a, b) {
    return a + b;
}

function sum2(a, b, c) {
    return a + b + c;
}

function sum(a, ...b) {
    let total = a;
    for(let b1 of b) {
        total+=b1;
    }
    return total;
}