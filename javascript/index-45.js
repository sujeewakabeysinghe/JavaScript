let a = (b, c) => {
    console.log(`Hello ${b} ${c}`);
}

a('Sujeewa', 'Bro');

console.log('---------------------------');

let b = [25, 15, 20, 13, 29];

b.sort((a, b) => a - b);
console.log(b);