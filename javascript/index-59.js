class Car {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

let cars = [
    new Car(100, 'Red'),
    new Car(200, 'Black'),
    new Car(200, 'White')
];

console.log(cars[0].b);
console.log(cars[2].b);

cars.forEach( car => console.log(car.b));