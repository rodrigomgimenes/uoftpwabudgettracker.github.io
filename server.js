const express     = require("express");
const logger      = require("morgan");
const mongoose    = require("mongoose");
const compression = require("compression");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(compression());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, function() {
  console.log(`App running on: http://localhost:${PORT}/`);
});
