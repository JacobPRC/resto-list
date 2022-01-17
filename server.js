const express = require("express");
const dotenv = require("dotenv");

const connectdb = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectdb();

const app = express();

app.use(express.json());

app.listen(() => 5000, console.log("Listening on 5k"));
