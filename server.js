const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const path = require("path");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/", authRoute);
app.use("/api", productRoute);
app.use("/users", userRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
