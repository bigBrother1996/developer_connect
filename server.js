const express = require("express");
const connectDb = require("./db");

const app = express();

// connet to database

connectDb();
// middleware bodyparser
app.use(express.json({ extennded: false }));

app.get("/", (req, res) => res.send("api is running"));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT} `));
