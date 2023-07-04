let a = window.prompt('Enter Something : ');
a = a.toLowerCase();
console.log(a);

switch(a) {
    case 'a':
        console.log('pressed a');
        break
    case 'b':
        console.log('pressed b');
        break
    case 'c':
        console.log('pressed c');
        break
    default:
        console.log('Not a Letter!!');
}

switch(true) {
    case a=='a':
        console.log('pressed a');
        break
    case a=='b':
        console.log('pressed b');
        break
    case a=='c':
        console.log('pressed c');
        break
    default:
        console.log('Not a Letter!!');
}