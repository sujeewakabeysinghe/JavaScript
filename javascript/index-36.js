let a = 'sujeewa';
let b = [1,2,3,4,5];
let c = [6,7,8,9,0];

console.log(...a);
console.log(...b);

let max1 = Math.max(b);
console.log(max1);
let max2 = Math.max(...b);
let max3 = Math.max(...b, ...c);
console.log(max2);
console.log(max3);

// b.push(c);
// console.log(b);
b.push(...c);
console.log(b);
console.log(...b);
