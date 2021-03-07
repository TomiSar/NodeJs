// Hello after 4 seconds
// Hello after 8 seconds
// You can define only ONE function
const theOneWaitFunc = delay => {
    console.log("Hello after " + delay + " seconds");
}

//arguments function, timeout(ms), delay argument for function
setTimeout(theOneWaitFunc, 4000, 4);
setTimeout(theOneWaitFunc, 8000, 8);