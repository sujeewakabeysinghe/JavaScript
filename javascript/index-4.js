let user_1 = window.prompt('What\'s your name?');
console.log(user_1);

let user_2;

document.getElementById('js-2').onclick = function() {
    user_2 = document.getElementById('js-1').value;
    console.log(user_2);
    document.getElementById('js-3').innerHTML = user_2;
}