const EventEmitter = require('events');

const myEmitter = new EventEmitter();

setImmediate(() => {
    myEmitter.emit('TEST_EVENT');
});

// these subscibes will happen before myEmitter.emit() call
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});