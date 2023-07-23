const promise1 = new Promise(
    (resolve, reject) => {
        let condition = true;
        if(condition) {
            // resolve('This is Resolve!', 5);
            resolve('This is Resolve!');
        } else {
            reject('This is Reject!');
        }
    }
);
// promise.then((value, a) => {console.log(value, a);})
//        .catch(a => {console.log(a);})
promise1.then(value => console.log(value))
        .catch(error => console.log(error));

console.log('----------------');

const promise2 = new Promise(resolve => {
    setTimeout(resolve, 3000);
});
promise2.then(() => {console.log('3 Seconds!')});

console.log('----------------');

const promise3 = a => new Promise(resolve => {
    setTimeout(resolve, a);
});
promise3(5000).then(() => {console.log('5 Seconds!')});