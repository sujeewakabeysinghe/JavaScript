sum(2, 3, display);


function display(sum) {
    console.log(sum);
}
function sum(a, b, myCallBack) {
    t = a + b;
    myCallBack(t);
}

console.log('---------------------------');

dd('Total : ', ss);

function ss(a, b) {
    return a+b;
}

function dd(a, myCallBack) {
    let b = myCallBack(3, 5);
    console.log(a,b);
}