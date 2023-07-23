async function thisIsLikePomise() {
    var myCondition = false;
    if(myCondition) {
        return 'This is Resolve!';
    } else {
        throw 'This is Reject!';
    }
}

async function awaitsWorksOnlyWithinAsyncFunction() {
    try {
        var msg = await thisIsLikePomise();
        console.log(msg);
    } catch(error) {
        console.log(error);
    }
}
awaitsWorksOnlyWithinAsyncFunction();