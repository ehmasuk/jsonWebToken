require("dotenv").config();

const jwt = require("jsonwebtoken");
const token = jwt.sign({ name: "masuk", email: "ehmasuk@gmail.com" }, process.env.JSON_WEB_TOKEN_SECRET);

const varifyJsonWebToken = jwt.verify(token,process.env.JSON_WEB_TOKEN_SECRET
);



console.log(varifyJsonWebToken);