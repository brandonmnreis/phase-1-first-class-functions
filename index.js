function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function() {return "I don't understand callbacks!"}
}