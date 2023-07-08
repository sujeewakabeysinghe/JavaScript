// let is blockscope
// var is functionscope

// ist example
// for(let i = 0; i<5; i++) {
//     console.log(i);
// }
// console.log(i); //you cannot use this outside of the block scope

// 2nd example
// for(var i = 0; i<5; i++) {
//     console.log(i);
// }
// console.log(i);

let name = 'suj'

// 3rd example
funOne();
function funOne() {
    for(var i = 0; i<5; i++) {
        console.log(i);
    }
}
console.log(i); //even though this is var, still you cannot use this outside of the function scope

//4th example
// global variables are those initialized in the top level which is before all functions
// best practice is, it should be always let type cause var variables change the browser's window properties, eg : name