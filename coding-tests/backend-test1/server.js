const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/authMiddleware");

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.get("/sign-in", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "signIn.html"));
});

app.post("/user-sign-in", authMiddleware, async (req, res) => {
  const userData = req.body;
  const users = await fetch("http://localhost:5000/users")
    .then((data) => data.json())
    .catch((error) => console.log("Error:", error));

  const existUser = users.find((user) => {
    if (user.email === userData.email && user.password === userData.password)
      return user;
  });

  if (!existUser) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = bcrypt.compareSync(userData.password, existUser.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const payload = { user: { id: existUser.id } };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  if (existUser) {
    res.send({ token: token }).redirect(`/user/${existUser.userName}`);
  } else {
    res.status(400).send({
      message:
        "User does not exist or make sure your email or password is correct!",
      data: userData,
    });
  }
});

app.get("/sign-up", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "signUp.html"));
});

app.post("/user-sign-up", async (req, res) => {
  const newUser = req.body;
  const users = await fetch("http://localhost:5000/users")
    .then((result) => result.json())
    .catch((error) => console.log("Error:", error));

  const existUser = users.find((user) => {
    if (user.email === newUser.email) {
      return user;
    }
  });
  if (!existUser) {
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    })
      .then((result) => result.json())
      .then((data) => console.log("User Signed Up successfully!"))
      .catch((error) => console.log("Error:", error));

    res.redirect("/sign-in");
  } else {
    res.send({ message: "This user already signed up!", data: newUser });
  }
});

app.get("/user/:username", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "quotes.html"));
});

app.use(express.static(path.join(__dirname, "client")));

app.listen(PORT, () =>
  console.log("Server is runnning on http://localhost:" + PORT)
);
