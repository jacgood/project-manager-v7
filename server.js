const compression = require("compression");
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const passport = require("passport");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");

const app = express();

// Connect Database
connectDB();

// Compresses App
app.use(compression());

// Init Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

// Define Routes
app.use("/api/users", users);

// Passport config

// app.use('/api/profile', require('./routes/api/profile'))
// app.use('/api/posts', require('./routes/api/posts'))
// app.use('/api/projects', require('./routes/api/projects'))

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
