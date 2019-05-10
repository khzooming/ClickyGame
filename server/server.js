const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var logger = require("morgan");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}
// make public a static folder
app.use(express.static("public"));

// morgan logger for logging requests
app.use(logger("dev"));


// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/src/pages/index.html"));
});

app.get('/*', function (req, res, next) {
  res.render('home', {
  });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


