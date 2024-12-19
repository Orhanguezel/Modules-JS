const express = require("express");

const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "PUT",
  })
);

app.put("/data", (req, res) => {
  res.send({ cors: "success" });
});

app.listen(4000);
