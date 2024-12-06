## What is Event Loop?

>[!TIP]
>The Event Loop is a fundamental concept in Node.js that enables it to handle non-blocking, asynchronous operations efficiently. It is part of the JavaScript runtime environment and is responsible for managing and coordinating the execution of code, handling I/O operations, and processing events or callbacks.

### Key Features of the Event Loop in Node.js:
1.Single-Threaded Nature:
- Node.js operates on a single thread for JavaScript execution, but the Event Loop allows it to handle multiple tasks (like I/O) concurrently without blocking the main thread.

2.Phases of the Event Loop: The Event Loop executes tasks in a structured order, divided into phases:
- Timers: Executes callbacks from setTimeout() and setInterval().
- Pending Callbacks: Handles I/O callbacks deferred to the next iteration of the loop.
- Idle, Prepare: Internal system operations.
- Poll: Retrieves new I/O events and executes their callbacks if ready.
- Check: Executes callbacks from setImmediate().
- Close Callbacks: Handles callbacks for events like socket.close().

2.Callback Queue:
- Asynchronous tasks (e.g., I/O operations, timers) have their associated callbacks placed in a queue.
- The Event Loop picks these callbacks one by one and executes them.

3.Non-blocking I/O:
- Node.js uses the Event Loop with non-blocking I/O operations, ensuring the application remains responsive even when performing heavy operations like file reads or network requests.

4.Interaction with Libuv:
- The Event Loop is implemented using libuv, a C library that provides an abstraction layer for asynchronous I/O and handles the system's threading, file operations, and more.

- ### How It Works:
- When Node.js starts, it initializes the Event Loop.
- Operations like setTimeout, setImmediate, or asynchronous file reads are passed to the Event Loop for execution.
- The Event Loop continues to run as long as there are tasks to process in the callback queue.

EXAMPLE:
```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timer callback');
}, 0);

console.log('End');
```
Output:
```sql
Start
End
Timer callback
```
Why?:
The setTimeout callback is executed after the synchronous code because it's placed in the callback queue for the Event Loop to process.

### Advantages:
Efficient handling of multiple concurrent tasks.
High performance for I/O-intensive applications.
Avoidance of thread management complexity.
