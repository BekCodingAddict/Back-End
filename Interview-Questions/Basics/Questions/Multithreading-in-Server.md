# Multithreading in a Server
Multithreading allows a server to handle multiple requests simultaneously by running multiple threads within a single process. This improves performance by enabling concurrent execution of tasks, reducing waiting time for users.


## How Multithreading Works in a Server
### 1. Client Request Handling
  - A server receives multiple client requests at the same time.
  - Instead of processing them sequentially (one at a time), it assigns each request to a separate thread.

### 2. Thread Creation & Execution
  - A thread is a lightweight unit of execution that runs within a process.
  - The server spawns multiple threads to handle requests concurrently.
  - Each thread handles one request at a time and then becomes available for the next request.

### 3. Synchronization & Resource Sharing
  - Threads share memory and resources (e.g., database connections, caches), so synchronization mechanisms (like mutexes, semaphores, and locks) are needed to prevent race conditions or data corruption.

### 4. Response Generation & Completion
  - Once a thread processes a request, it sends the response to the client.
  - The thread is then either terminated or returned to a thread pool for reuse.

## Multithreading Models in Servers
### 1. Thread-Per-Request Model
  - A new thread is created for every incoming request.
  - Pros: Simple implementation.
  - Cons: High overhead due to frequent thread creation and destruction.

### 2. Thread Pool Model (Most Common)
  - A pool of pre-created worker threads is used to handle requests.
  - When a request arrives, an available thread from the pool processes it.
  - Pros: Efficient use of resources, avoids excessive thread creation overhead.
  - Cons: Limited by the number of threads in the pool.

### 3. Event-Driven (Non-Blocking) Model (e.g., Node.js)
  - A pool of pre-created worker threads is used to handle requests.
  - When a request arrives, an available thread from the pool processes it.
  - Pros: Efficient use of resources, avoids excessive thread creation overhead.
  - Cons: Limited by the number of threads in the pool.

## Example: Multithreading in a Python Server (Flask with Threading)
```py
from flask import Flask
import threading

app = Flask(__name__)

def handle_request():
    print(f"Processing request in thread: {threading.current_thread().name}")

@app.route('/')
def index():
    thread = threading.Thread(target=handle_request)
    thread.start()
    return "Request is being processed in a separate thread."

if __name__ == '__main__':
    app.run(threaded=True)

```
  - Flask’s threaded=True enables multi-threading.
  - Each request is handled in a separate thread.

### Which Servers Use Multithreading?
  - Apache HTTP Server (Uses thread pools)
  - Tomcat (Java Servlets) (Multi-threaded by default)
  - Django with Gunicorn (Uses worker threads)
  - Node.js (Single-threaded, but uses worker threads for CPU-heavy tasks)
