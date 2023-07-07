let temp = window.prompt('Enter number:');
console.log(temp, typeof temp);1
temp = Number(temp);
console.log(temp, typeof temp);

if(!(temp >= 100)) {
    console.log('Below 100!');
} else {
    console.log('More than 100!');
}