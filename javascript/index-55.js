class Vehicle {
    constructor(a, d) {
        this.a = a;
        this.d = d;
    }
    drive() {
        console.log('Drive', this.d, this.a, this.c);
    }
}

class Car extends Vehicle{
    constructor(a, c, d) {
        super(a, d);
        this.c = c;
    }
    myCar() {
        console.log('Less people', this.c, this.d);
    }
}

class Van extends Vehicle{
    constructor(a, c, d) {
        super(a, d);
        this.c = c;
    }
    myVan() {
        console.log('More people', this.c, this.d);
    }
}

let car1 = new Car(true, 'Ash', 2);
car1.drive();
car1.myCar();

let van1 = new Van(false, 'White', 4);
van1.drive();
van1.myVan();