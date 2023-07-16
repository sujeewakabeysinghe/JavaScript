// static only belongs to the class, not to the object

class Car {
    static noOfCars = 0;
    constructor(c) {
        this.c = c;
        Car.noOfCars += 1;
    }
    drive() {
        console.log('Drive', this.c);
    }

    static stop() {
        console.log('Stop');
    }
}

let car1 = new Car('Ash');
let car2 = new Car('Red');
let car3 = new Car('Black');

console.log(Car.noOfCars);
Car.stop()

// example
Math.round();
console.log(Math.PI);
console.log(Math);