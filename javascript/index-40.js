let a = [1, 2, 3, 4, 5];
console.log(a.map(myFun));
console.log(a.forEach(myFun));

function myFun(a, b, c) {
    return Math.pow(a, 2);
}