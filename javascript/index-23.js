for(let i = 0; i<5; i++){
    for(let j = 5; j>0; j--){
        console.log(i, j);
    }
    console.log('-----------');
}

let l = window.prompt('Letter :')
let h = window.prompt('Height :');
h = Number(h);

for(let i = 0; i<=h; i++){
    for(let j = i; j>0; j--){
        document.getElementById('js').innerHTML += l
    }
    document.getElementById('js').innerHTML += '<br>'
}