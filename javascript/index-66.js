console.time('time');
console.log('Start!')
setTimeout(() => console.log('Hi!'), 3000);
console.log('End!')
console.timeEnd('time'); //this is synchronous

// console.time('time');
// alert('Click the Button!')
// console.timeEnd('time')