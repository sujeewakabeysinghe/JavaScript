class Car {
    color = '';
    door = 0;
    drive() {
        console.log('Drive');
    }
    stop() {
        console.log('Stop', this.door);
    }
}

let car1 = new Car();
car1.color = 'Ash';
car1.door = 2
console.log(car1.color);
car1.drive();
car1.stop();

let car2 = new Car();
car2.color = 'Red';
console.log(car2.color);
car2.drive();
car2.stop();