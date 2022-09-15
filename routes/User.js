const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ldd63ua.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});



/*------------------------------------------*\
                User API Start
\*------------------------------------------*/
const usersCollection = client.db("shoe-inventory").collection("users");


router.get("/", async (req, res) => {
  const query = {};
  const cursor = usersCollection.find(query);
  const allUsers = await cursor.toArray();
  res.send(allUsers);
});

module.exports = router;