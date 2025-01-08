// Load express module using `require` directive
let express = require("express");
let app = express();

// Define request response in root URL (/)
app.get("/", function (req, res) {
  res.send("Dockerize the node app");
});

// Define request response in root URL (/)
app.get("/health", function (req, res) {
  res.json({
    success: true,
  });
});

// Launch listening server on port 8081
app.listen(8080, function () {
  console.log("app listening on port 8081");
});
