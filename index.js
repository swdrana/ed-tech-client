const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());


// Create root API
app.get("/", (req, res) => {
    res.send("Running Shoe Inventory server");
  });
  
// For Port & Listening
app.listen(port, (req, res) => {
    console.log("Listening to port", port);
  });