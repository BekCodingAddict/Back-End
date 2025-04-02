# Explain HTTP Methods
HTTP (HyperText Transfer Protocol) defines various methods that indicate the desired action to be performed on a given resource. Below are the commonly used HTTP methods:

## 1. GET
- Purpose: Retrieve data from a server.
- Characteristics:
  - Safe (does not modify data).
  - Idempotent (multiple identical requests produce the same result).
  - Can be cached.
Example:
```http
GET /users HTTP/1.1
Host: example.com
```
## 2. POST
- Purpose: Submit data to the server to create a new resource.
- Characteristics:
  - Not idempotent (multiple requests create multiple resources).
  - Can include a request body.
Example:
```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}

```
## 3. PUT
- Purpose: Update or replace an existing resource.
- Characteristics:
  - Idempotent (repeated requests have the same effect).
  - Usually replaces the entire resource.
Example:
```http
PUT /users/1 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com"
}

```
## 4. PATCH
- Purpose: Partially update an existing resource.
- Characteristics:
  - Not necessarily idempotent (depends on the implementation).
  - Only updates specific fields.
Example:
```http
PATCH /users/1 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "email": "john.doe@newdomain.com"
}
```
##  5. DELETE
 - Purpose: Remove a resource from the server.
 - Characteristics:
   - Idempotent (multiple requests have the same effect).
   - Usually does not return a response body.
Example:
```http
DELETE /users/1 HTTP/1.1
Host: example.com
```

### 6. HEAD
- Purpose: Retrieve only the headers of a response (without the body).
- Characteristics:
  - Useful for checking metadata (e.g., file size, modification date).
  - Idempotent and safe.
Example:
```http
HEAD /users HTTP/1.1
Host: example.com
```

## 7. OPTIONS
- Purpose: Retrieve the allowed HTTP methods for a resource.
- Characteristics:
  - Useful for CORS (Cross-Origin Resource Sharing) preflight requests.
  - Idempotent and safe.
Example:
```http
OPTIONS /users HTTP/1.1
Host: example.com
```
## 8. TRACE
- Purpose: Echo the received request back to the client (for debugging purposes).
- Characteristics:
  - Not commonly used.
  - Can expose security risks (e.g., Cross-Site Tracing attacks).
Example:
```http
TRACE /users HTTP/1.1
Host: example.com
```

### 9. CONNECT
- Purpose: Establish a tunnel to a server (used in HTTPS and proxies).
- Characteristics:
  - Used for SSL/TLS connections.
  - Not typically used in RESTful APIs.
Example:
```http
CONNECT example.com:443 HTTP/1.1
```
![image](https://github.com/user-attachments/assets/c9fe0e67-1dea-480a-a275-4257f4cf67fe)





