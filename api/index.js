const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const authRoute = require("./Routes/auth")
const userRoute = require("./Routes/users")

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
}).then(console.log("connected to MongoDB"))
.catch((err) => console.log(err.log));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute)

app.listen("3000", ()=>{

  console.log("backend is running")
})

