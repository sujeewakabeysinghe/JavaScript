let user = '';

while(user == '' || user == null) {
    user = window.prompt('Enter Name :');
    console.log('What\'s your name?');
}
console.log('Hi', user, 'bro');