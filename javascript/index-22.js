for(let i = 0; i<20; i++){
    if(i == 13) {
        console.log(`${i}, Skip here`);
        break;
        console.log(i,'Point B');
    }
    console.log(i);
}

console.log('-----------');

for(let i = 0; i<20; i++){
    if(i == 13) {
        console.log(`${i}, Skip typing this`);
        continue;
        console.log(i,'Point B');
    }
    console.log(i);
}