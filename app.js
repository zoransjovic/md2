const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

require("./api")(app);

const server = http.createServer(app);
port = "3000";
server.listen(port, () => {
  console.log("API started on port: " + port);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Failed to start App.", reason);
});
