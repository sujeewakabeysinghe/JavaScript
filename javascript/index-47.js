let a = 'Hello';
let b = 'world!';

hellowWorld();

function hellowWorld() {
    
    hellow();
    world();

    function hellow() {
        console.log(a);
    }

    function world() {
        console.log(b);
    }
}