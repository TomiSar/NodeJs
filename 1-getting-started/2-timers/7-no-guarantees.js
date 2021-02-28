setTimeout(
    ()=> console.log("Hello after 500 milliseconds. OR NOT!!")
    , 
500);

var start = new Date().getTime();

for (let i = 0; i < 1e10; i++) {
    // Block Node Synchronously
}
var end = new Date().getTime();

console.log("Call for function took " + (end-start) / 1000 + " seconds");