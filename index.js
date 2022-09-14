const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ldd63ua.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const run = async () => {
  try {
    await client.connect();
    const usersCollection = client.db("shoe-inventory").collection("users");

    /*------------------------------------------*\
                    User API Start
    \*------------------------------------------*/

    // load all users from database
    app.get("/users", async (req, res) => {
      const query = {};
      const cursor = usersCollection.find(query);
      const allUsers = await cursor.toArray();
      res.send(allUsers);
    });
  } finally {
  }
};
run().catch(console.dir);

// Create root API
app.get("/", (req, res) => {
  res.send("Running Shoe Inventory server");
});

// For Port & Listening
app.listen(port, (req, res) => {
  console.log("Listening to port", port);
});
