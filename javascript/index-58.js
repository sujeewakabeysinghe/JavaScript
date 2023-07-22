class Car {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    drive() {
        console.log('This is', this.b);
    }
}

let car1 = new Car(100, 'Red');
let car2 = new Car(200, 'Black');
let car3 = new Car(200, 'White');

let cars = [car1, car2, car3];
console.log(cars[0].b);
console.log(cars[2].b);
cars[1].drive();