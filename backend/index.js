const express = require('express');
const dotenv = require('dotenv').config();
const app =express();
let port = process.env.PORT;

//body parser
app.use(express.json());
app.use("/api/user", require("./route/UserRoute"));

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
);