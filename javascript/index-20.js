let user='';

do {
    user = window.prompt('Enter Name :');
    console.log('What\'s your name?');
} while(user == '' || user == null);

console.log('Hi', user, 'bro');