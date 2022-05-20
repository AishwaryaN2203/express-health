const express = require("express");
const exampleHandlers = require("../handlers/example.handler");

const exampleRouter = express.Router();
exampleRouter.get("/example", exampleHandlers.justExample);
exampleRouter.get("/example/:id", exampleHandlers.exampleParams);

module.exports = {
  exampleRouter,
};
