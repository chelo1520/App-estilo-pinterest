const express = require("express");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const crypto = require("crypto");
const { format } = require("timeago.js");



// Initialization
const app = express();
require("./database");

// Setings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");



// Midlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}))
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/img/uploads"),
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, rawBuffer) => {
      if (err) return cb(err);

      const uniqueFileName = rawBuffer.toString("hex") + path.extname(file.originalname);
      cb(null, uniqueFileName);
    });
  },
});
app.use(multer({storage}).single("image"));


// Global variables
app.use((req, res, next) => {
  app.locals.format = format;
  next();
})

// Routes
app.use(require("./routes/index"));

// Static files
app.use(express.static(path.join(__dirname, "public"))); 

// Start server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
})