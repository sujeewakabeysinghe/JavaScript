// function thisIsLikePomise() {
//     var myCondition = false;
//     if(myCondition) {
//         return Promise.resolve('This is Resolve!');
//     } else {
//         return Promise.reject('This is Reject!');
//     }
// }

async function thisIsLikePomise() {
    var myCondition = true;
    if(myCondition) {
        return 'This is Resolve!';
    } else {
        throw 'This is Reject!';
    }
}

thisIsLikePomise().then( value => console.log(value))
                  .catch( error => console.log(error));