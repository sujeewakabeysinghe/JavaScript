try {
    let a = window.prompt('Enter Number :');
    a = Number(a);
    if(isNaN(a)) throw 'Enter a Number!';
    if(a == '') throw 'It\'s Empty!';
    console.log('Number is :', a);
} catch(error) {
    console.log('Error is :',error);
} finally {
    console.log('Always!');
}