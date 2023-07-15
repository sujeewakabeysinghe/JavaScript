let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J','Q', 'K'];
console.log(cards);

const shuffle = a => {
    let l = a.length;

    while(l != 0) {
        r = Math.floor(Math.random()*l);
        l-=1;
        t = a[l];
        a[l] = a[r];
        a[r] = t;
    }

    return a;
}

shuffle(cards);
console.log(cards);