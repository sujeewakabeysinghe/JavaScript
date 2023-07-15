let a = [11, 2, 3, 4, 5];

let b = a.reduce(total);
console.log(b);

function total(a, b, c, d) {
    console.log(a);
    console.log('Element : ',b);
    console.log('Index : ',c);
    console.log('Array : ',d);
    return a-b;
}