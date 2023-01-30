require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.port || 5000;
const http = require("http").createServer(app);

app.use(express.json());

app.use("/user", require("./routes/user"));

try{
    http.listen(port, () => {
        console.info("Server listening on port : " + port);
    });
} catch(e) {
    console.log("Server error on port : " + port);
}