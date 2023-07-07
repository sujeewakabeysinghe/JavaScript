let temp = window.prompt('Enter number:');
console.log(temp, typeof temp);1
temp = Number(temp);
console.log(temp, typeof temp);

if(temp > 100) {
    console.log('More than 100!');
} else if(temp <= 100 && temp >=50) {
    console.log('Between 100 and 50!')
} else {
    console.log('Below 50!');
}