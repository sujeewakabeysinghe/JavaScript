let a = [13, 25, 15, 20, 29];

let b = a.filter(below20);
console.log(b);

function below20(a, b, c, d) {
    return a < 20;
    // return console.log(a, b, c, d)
}