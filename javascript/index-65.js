// synchronous
console.log('Start!')
console.log('One')
console.log('Two')
console.log('Three')
console.log('End!')

console.log('----------------');

// asynchronous
console.log('Start!')
console.log('One')
setTimeout(() => console.log('Two'), 3000);
console.log('Three')
console.log('End!')