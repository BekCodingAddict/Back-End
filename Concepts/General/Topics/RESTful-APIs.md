## What is a RESTful API?
A RESTful API (Representational State Transfer API) is a web service that follows REST (Representational State Transfer) principles to enable communication between a client (frontend) and a server (backend). It is widely used in web development for building scalable and stateless APIs.

## REST API vs. RESTful API:
1. REST API – Any API that follows some REST principles.
2. RESTful API – A fully compliant API that strictly follows REST principles.

- 👉 All RESTful APIs are REST APIs, but not all REST APIs are truly RESTful.

## Key Principles of RESTful APIs:
1. Stateless – No client information is stored on the server between requests.
2. Client-Server Architecture – The frontend and backend are separated.
3. Uniform Interface – Uses standard HTTP methods (GET, POST, PUT, DELETE).
4. Resource-Based – Everything is treated as a resource (e.g., /users, /products).
5. Use of HTTP Methods:
- GET → Retrieve data (GET /users)
- POST → Create a resource (POST /users)
- PUT → Update a resource (PUT /users/1)
- DELETE → Remove a resource (DELETE /users/1)

6. Use of URIs (Endpoints) – Resources are identified by unique URLs.
7. Uses JSON or XML – Typically responds with JSON data.


### Example of a RESTful API Request and Response
📌 Request:
```http
GET /users/1 HTTP/1.1
Host: example.com
```
📌 Response:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```
## How Some REST APIs Might Not Be Fully RESTful
- If an API stores client state on the server (violates statelessness).
- If an API uses non-standard HTTP methods (e.g., using POST for retrieval instead of GET).
- noIf it does not use proper resource-based URIs (e.g., /getUser?id=1 instead of /users/1).

### Difference Between REST API and RESTful API
Many people use REST API and RESTful API interchangeably, but there is a subtle difference.
![image](https://github.com/user-attachments/assets/12ec00ed-265c-4a52-ad26-765841384820)

### Example of REST API (Not Fully RESTful)
Request:
```http
POST /getUser?id=1 HTTP/1.1
Host: example.com
```
- Problem: Uses POST instead of GET for retrieving data.
- Problem: URL is not resource-based (/getUser?id=1 instead of /users/1).

### Example of a Fully RESTful API
Request:
```http
GET /users/1 HTTP/1.1
Host: example.com
```
- Correct: Uses GET to retrieve data.
- Correct: Uses a proper resource-based URI (/users/1).

### Conclusion
👉 All RESTful APIs are REST APIs, but not all REST APIs are RESTful.
A RESTful API strictly follows REST principles, while a REST API might only follow some of them.

