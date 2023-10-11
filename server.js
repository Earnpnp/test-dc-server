const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParse = require("body-parser");

const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const path = require("path");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParse.json({ limit: "10mb" }));
app.use("/assets", express.static("/assets"));
app.use(express.json());

app.use("/", authRoute);
app.use("/api", productRoute);
app.use("/users", userRoute);

app.use("/assets", express.static(path.join(__dirname, "assets")));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
