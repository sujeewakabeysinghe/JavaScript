let a = [25, 15, 20, 13, 29];
let b = ['orage', 'apple', 'mango', 'banana'];

b.sort();
console.log(b);

a.sort(zeroTo1000);
console.log(a);

function zeroTo1000(a, b) {
    return a - b;
}