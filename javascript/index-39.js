let a = ['apple', 'mango', 'banana'];

a.forEach(myFun);

function myFun(a, b, c) {
    console.log(`Element : ${a}, Index : ${b}, Array : ${c}`);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a[0]);
    console.log(a.substring(2));
    console.log('------------');
}

a.forEach( (a,b) => console.log('One Line : ', a, b));
a.forEach( a => console.log(a.toLocaleUpperCase()));