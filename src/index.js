const express = require("express");
const env = require("dotenv");

const { healthRouter } = require("./routes/health.routes");
const { exampleRouter } = require("./routes/example.routes");

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use("/health", healthRouter);
app.use("/example", exampleRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
