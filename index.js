const express = require("express")
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5555

// middleware
app.use(cors())
app.use(express.json())

// mdabarik
// EvgQB0Rl5T7S8MeA


const uri = "mongodb+srv://mdabarik:EvgQB0Rl5T7S8MeA@cluster0.waijmz7.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Simple app is running...")
})

app.listen(port, () => {
    console.log("Simple crud is running on port: " + port);
})