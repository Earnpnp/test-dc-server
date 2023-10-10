const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParse = require("body-parser");

const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const path = require("path");
const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParse.json({ limit: "10mb" }));

app.use("/", authRoute);
app.use("/api", productRoute);
app.use("/users", userRoute);

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
