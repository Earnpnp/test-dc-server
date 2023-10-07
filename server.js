const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const app = express();

app.use(express.json());

app.use(cors());

app.use("/auth", authRoute);
app.use("/product", productRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
