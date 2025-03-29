## What is REST API?
A REST API (Representational State Transfer Application Programming Interface) is a way for different systems to communicate over the internet using standard HTTP methods like GET, POST, PUT, DELETE.

### Key Features of REST API:
1. Stateless – Each request is independent; the server doesn’t store client state.
2. Client-Server Architecture – The frontend (client) and backend (server) are separate.
3. Use of HTTP Methods:
   - GET → Retrieve data
   - POST → Create new data
   - PUT → Update existing data
   - DELETE → Remove data

## Example of a REST API Request:
GET Request (Fetching User Data)
```nginx
GET https://api.example.com/users/123
```
📌 Response (JSON):
```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Steps to Create a REST API in Python
📌 Install FastAPI and Uvicorn (if not installed)
```bash
pip install fastapi uvicorn
```
📌 Create a Simple API (main.py)
```py
from fastapi import FastAPI

app = FastAPI()

# Sample data (acting as a database)
users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"},
]

# GET request to fetch all users
@app.get("/users")
def get_users():
    return users

# GET request to fetch a specific user by ID
@app.get("/users/{user_id}")
def get_user(user_id: int):
    for user in users:
        if user["id"] == user_id:
            return user
    return {"error": "User not found"}

# POST request to add a new user
@app.post("/users")
def add_user(user: dict):
    users.append(user)
    return {"message": "User added successfully", "user": user}

# Run the server using Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

```
📌 Run the API Server
```bash
uvicorn main:app --reload
```
### 📌 Test the API Endpoints:
- 1️⃣ Get all users: GET http://127.0.0.1:8000/users
- 2️⃣ Get a specific user: GET http://127.0.0.1:8000/users/1
- 3️⃣ Add a new user: POST http://127.0.0.1:8000/users with JSON data

```js
{
  "id": 3,
  "name": "Charlie",
  "email": "charlie@example.com"
}
```
🔹 You can also test it in Swagger UI at:
👉 http://127.0.0.1:8000/docs
