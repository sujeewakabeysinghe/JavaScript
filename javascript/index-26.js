
let a = window.prompt('Age ;');
let b = funOne(a);
console.log('Adult :',b);


function funOne(b) {
    return b >=18 ? true : false;
}