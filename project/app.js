require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.port || 5000;
const http = require("http").createServer(app);

app.use(express.json());

app.use("/user", require("./routes/user"));
app.use("/address", require("./routes/address"));
app.use("/category", require("./routes/category"));
app.use("/sub-category", require("./routes/subCategory"));
app.use("/status", require("./routes/status"));
app.use("/product", require("./routes/product"));
app.use("/basket", require("./routes/basket"));
app.use("/payment", require("./routes/payment"));

try{
    http.listen(port, () => {
        console.info("Server listening on port : " + port);
    });
} catch(e) {
    console.log("Server error on port : " + port);
}