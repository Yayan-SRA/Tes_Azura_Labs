const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
const cors = require("cors")
const app = express();

/** Install request logger */
app.use(morgan("dev"));

app.use(cors({credentials:true, origin: 
    "http://localhost:3000",
methods: ["GET", "POST","DELETE","PUT"]}))
// app.use(express.static("public"))
// const coba = __dirname + "\..\public"
// console.log("tes", __dirname)
// console.log("tes2", coba)

/** Install JSON request parser */
app.use(express.json());

app.set("view engine", "ejs");

/** Install Router */
app.use(router);

module.exports = app;
