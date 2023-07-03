document.getElementById('js2').onclick = function() {

    let check = document.getElementById('js1').checked;
    let name = document.getElementById('js1').name;

    if(check) {
        console.log(check,name);
    } else {
        console.log(check, name);
    }

}

document.getElementById('js6').onclick = function() {

    let radio1 = document.getElementById('js3').checked;
    let name1 = document.getElementById('js3').name;
    
    let radio2 = document.getElementById('js4').checked;
    let name2 = document.getElementById('js4').name;
    
    let radio3 = document.getElementById('js5').checked;
    let name3 = document.getElementById('js5').name;

    if(radio1) {
        console.log(radio1,name1+' 1');
    } else if(radio2) {
        console.log(radio2,name2+' 2');
    } else if(radio3) {
        console.log(radio3,name3+' 3');
    } else {
        console.log('click radio');
    }
    
}