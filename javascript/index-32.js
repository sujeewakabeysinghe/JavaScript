let fruits = ['apple', 'banana', 'mango'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits[2] = 'orange';
console.log(fruits);
console.log(fruits[2]);

fruits.push('papaya'); //add element
console.log(fruits);
console.log(fruits[3]);

fruits.pop(); //remove the last element
console.log(fruits);

fruits.shift(); //remove the first element
console.log(fruits);

fruits.unshift('apple'); //add element to beg ining
console.log(fruits);

console.log(fruits.length);
console.log(fruits.indexOf('banana'));