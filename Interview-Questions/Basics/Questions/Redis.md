# What is Redis?
Redis (Remote Dictionary Server) is an open-source, in-memory data store that is primarily used as a database, cache, and message broker. It is known for its high speed, low latency, and support for various data structures.

## Key Features of Redis
### 1. In-Memory Storage
- Stores all data in RAM, making read and write operations extremely fast.

### 2. Data Structures Support
- Redis supports various data types:
  - Strings → "Hello, Redis!"
  - Lists → ["task1", "task2", "task3"]
  - Sets → {1, 2, 3, 4}
  - Hashes → { "name": "John", "age": 30 }
  - Sorted Sets → { "player1": 100, "player2": 200 }
  - Bitmaps, HyperLogLogs, Streams

### 3. Persistence Options
- RDB (Redis Database File) → Saves data at intervals (snapshotting).
- AOF (Append-Only File) → Logs every operation for durability.

### High Performance
- Can handle millions of requests per second with minimal latency.

### Pub/Sub Messaging
- Supports publish-subscribe messaging, making it useful for real-time applications.

### Distributed & Scalable
- Supports clustering, replication, and sharding.

## Common Use Cases
- Caching → Store frequently accessed data (e.g., user sessions, API responses).
- Session Management → Maintain user sessions in web applications.
- Real-time Analytics → Leaderboards, counting operations.
- Message Queues → Using Redis' pub/sub or list-based queues.
- Rate Limiting → Prevent abuse in APIs.

## Basic Redis Commands
1. Store and Retrieve a Value
```sh
SET key "Hello, Redis!"
GET key
```
2. Work with Lists
```sh
LPUSH tasks "Task1"
RPUSH tasks "Task2"
LRANGE tasks 0 -1
```
3. Work with Hashes
```sh
HSET user:1 name "John"
HGET user:1 name
```
4. Set Expiry (TTL)
```sh
SET session "user123"
EXPIRE session 60  # Expires in 60 seconds
```
## Why Use Redis?
- Super fast (sub-millisecond latency).
- Scalable (supports clustering).
- Flexible (supports multiple data types).
- Persistent (optional durability with AOF & RDB).
