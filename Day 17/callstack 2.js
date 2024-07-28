//nested function
function outerfunction() {
    console.log("Start of outerfunction");
    middlefunction();
    console.log("End of outerfunction");
}

function middlefunction() {
    console.log("Start of middlefunction");
    innerfunction();
    console.log("End of middlefunction");
}

function innerfunction() {
    console.log("Inside innerfunction");
}
outerfunction();

//event looping
console.log("Start");

setTimeout(function timeout() {
    console.log("Timeout completed");
}, 0);

Promise.resolve().then(function promisehandler() {
    console.log("Promise resolved");
});
console.log("End");
