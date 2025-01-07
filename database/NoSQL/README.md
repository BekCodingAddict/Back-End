# What is NoSQL
>[!NOTE]
>NoSQL (Not Only SQL) refers to a type of database that does not use the traditional relational model used by SQL databases. Unlike relational databases that store data in tables with rows and columns, NoSQL databases can store data in a variety of formats, such as documents, key-value pairs, graphs, or wide-column stores.

The key characteristics of NoSQL databases are:
1. Schema Flexibility: NoSQL databases allow for dynamic or flexible schema design. This means that the data structure can vary between records, unlike relational databases where all records must conform to the same schema.
2. Scalability: Many NoSQL databases are designed to scale horizontally, meaning they can handle large amounts of data by distributing the workload across multiple servers or clusters.
3. High Availability and Fault Tolerance: NoSQL databases often provide built-in features for replication, ensuring that data remains available even if one or more servers fail.

### Types of NoSQL Databases:
- Document-based databases (e.g., MongoDB, CouchDB): Store data as documents (usually in JSON or BSON format), which can contain nested structures.
- Key-value stores (e.g., Redis, DynamoDB): Store data as key-value pairs, where each key is unique and is associated with a value.
- Column-family stores (e.g., Cassandra, HBase): Organize data into columns rather than rows, optimized for reading and writing large volumes of data.
- Graph databases (e.g., Neo4j, ArangoDB): Used for storing and querying data that is connected through relationships, ideal for applications like social networks or recommendation engines.

NoSQL databases are often used for large-scale, distributed systems, real-time web apps, and applications requiring flexible data models or high scalability, where traditional relational databases may be less efficient.
