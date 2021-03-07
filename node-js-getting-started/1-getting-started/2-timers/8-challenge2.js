// Print "Hello World"
// Every second
// And stop after 5 times
// After 5 times. Print "Done" and let Node exit.
let counter = 0;
const intervalId = setInterval(() => {
    if (counter === 0) {
        console.log(`Hello world ${counter + 1} time`);
    } else {
        console.log(`Hello world ${counter + 1} times`);
    }
    counter++;

    if (counter === 5) {
        console.log("Done and Exiting..");
        clearInterval(intervalId);
    }
}, 1000); 