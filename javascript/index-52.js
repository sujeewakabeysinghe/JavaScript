class Car {
    constructor(c, d) {
        this.c = c;
        this.d = d;
    }
    drive() {
        console.log('Drive', this.c);
    }
    stop() {
        console.log('Stop', this.d);
    }
}

let car1 = new Car('Ash', 2);
car1.drive();
car1.stop();
console.log(car1.c);

let car2 = new Car('Red', 4);
car2.drive();
car2.stop();
console.log(car2.c);