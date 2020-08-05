import express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;

const app: express.Application = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});
