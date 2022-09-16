const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
const productCollection = client.db("shoe-inventory").collection("product");

router.get("/", async (req, res) => {
  const query = {};
  const cursor = productCollection.find(query);
  const allProducts = await cursor.toArray();
  res.send(allProducts);
});

// load single item using _id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const product = await productCollection.findOne(query);
//   console.log(product);
  res.send(product);
});

router.post("/", async (req, res) => {
  const product = req.body;
  console.log(product);
  const result = await productCollection.insertOne(product);
  res.send(result);
});

module.exports = router;
