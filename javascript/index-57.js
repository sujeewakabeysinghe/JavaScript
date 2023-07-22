class Car {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

function showCar(car) {
    console.log(car.a);
    console.log(car.b);
}

function setColor(car, color) {
    car.b = color;
}

let car = new Car(660, 'Ash');
showCar(car);
setColor(car, 'Red');
showCar(car);