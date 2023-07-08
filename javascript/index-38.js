sum(2, 3, display);


function display(sum) {
    console.log(sum);
}
function sum(a, b, myCallBack) {
    t = a + b;
    myCallBack(t);
}