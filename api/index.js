const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const authRoute = require("./Routes/auth")

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
}).then(console.log("connected to MongoDB"))
.catch((err) => console.log(err.log));

app.use("/api/auth", authRoute);

app.listen("3000", ()=>{

  console.log("backend is running")
})

