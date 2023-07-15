let a = new Map([
    ['orange', 40],
    ['apple', 45],
    ['banana', 20],
    ['mango', 35]
])

console.log(a);
a.forEach((v, k)=> console.log(`Key : ${k}, Value : $${v}`));

console.log(a.get('apple'));
a.set('water melon', 30)
console.log(a);
a.delete('water melon', 30)
console.log(a);
console.log(a.size);
console.log(a.has('apple'));