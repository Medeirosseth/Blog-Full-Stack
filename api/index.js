const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const authRoute = require("./Routes/auth")
const userRoute = require("./Routes/users")
const postRoute = require('./Routes/posts')
const categoryRoute = require('./Routes/categories')
const multer = require("multer")
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
}).then(console.log("connected to MongoDB"))
.catch((err) => console.log(err.log));

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, "images")
  }, filename:(req,file,cb) => {
    cb(null, req.body.name)
  },
});

const upload = multer({ storage:storage})
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json(" File has been uploaded");
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

app.listen("3000", ()=>{

  console.log("backend is running")
})

