let diceSize = 6;

document.getElementById('js1').onclick = () => {
    
    let side1 = Math.ceil(Math.random() * diceSize);
    let side2 = Math.ceil(Math.random() * 10);
    let side3 = Math.ceil(Math.random() * 25);

    document.getElementById('js2').innerHTML = side1;
    document.getElementById('js3').innerHTML = side2;
    document.getElementById('js4').innerHTML = side3;

}