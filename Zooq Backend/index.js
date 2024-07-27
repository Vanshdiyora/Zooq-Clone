const express = require("express");
const cors = require('cors');
const routes = require("./routes");
const app = express();
// Basic CORS configuration
app.use(cors());

// More specific CORS configuration
const corsOptions = {
  origin: '*', // Allow only this origin
  methods: 'GET,POST,PUT,DELETE', // Allow only these HTTP methods
  allowedHeaders: 'Content-Type,Authorization', // Allow only these headers
};

app.use(cors(corsOptions));

require('dotenv').config();
require("./config/db")
const bodyParser=require("body-parser")

app.use(bodyParser.json())
app.use("/api",routes)
app.listen(process.env.PORT, () => {
    console.log("Connected",process.env.PORT);
});
