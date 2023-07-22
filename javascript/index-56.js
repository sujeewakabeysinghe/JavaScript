class Car{
    constructor(a) {
        this._level = a;
    }
    get level() {
        return this._level;
    }
    set level(b) {
        if (b > 500) {
            this._level = 250;
        } else if(b < 0) {
            this._level = 0;
        } else {
            this._level = b;
        }
    }
}

let car = new Car(100);
console.log(car.level);
car.level = -800;
console.log(car.level);