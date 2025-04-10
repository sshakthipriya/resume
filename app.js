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


const os = require('os');

// Function to perform CPU-intensive calculations
const  stressCPU = ()  => {
    let num = 0;
    while (true) {
        num++;
        Math.sqrt(num); // Perform a useless calculation to keep CPU busy
    }
}

// Function to start the stress test by spawning multiple workers
const startStressTest = (cpuCount) => {
    console.log(`Starting CPU stress test with ${cpuCount} workers...`);
    for (let i = 0; i < cpuCount; i++) {
        // Use setImmediate to avoid blocking the main thread
        setImmediate(() => {
            stressCPU();
        });
    }
}

// Set the number of workers to match the number of CPU cores on your system
const cpuCount = os.cpus().length;

startStressTest(cpuCount);

// Launch listening server on port 8081
app.listen(8080, function () {
  console.log("app listening on port 8081");
});
