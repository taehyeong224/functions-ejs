const functions = require('firebase-functions');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")({origin: true});
const app = express();
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(cors);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (request, response) => {
    response.render("index", {msg: "hi"});
});
exports.app = functions.https.onRequest(app);
