console.log(this);
console.log(this.innerHeight);
console.log(this.innerWidth);

let car1 = {
    color : 'Ash',
    doors : 2,
    drive : function() {
        console.log('Drive', this.color);
    },
    stop : function() {
        console.log('Stop');
    }
}
console.log(car1.color);
car1.drive();

let car2 = {
    color : 'Red',
    doors : 4,
    drive : function() {
        console.log('Drive', car2.color);
    },
    stop : function() {
        console.log('Stop', car1.doors);
    }
}
console.log(car2.color);
car2.drive();
car2.stop();