class Vehicle {
    auto = true;
    drive() {
        console.log('Drive', this.color, this.auto);
    }
}

class Car extends Vehicle{
    color = 'Ash';
    myCar() {
        console.log('Less people', this.auto);
    }
}

class Van extends Vehicle{
    color = 'White';
    myVan() {
        console.log('More people');
    }
}

let car1 = new Car();
car1.drive();
car1.myCar();

let van1 = new Van();
van1.drive();
van1.myVan();