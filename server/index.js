"use strict";

const express       = require("express");
const bodyParser    = require("body-parser");
const moment        = require("moment");
const db            = require("./lib/in-memory-db");
const DataHelpers   = require("./lib/data-helpers.js")(db);
const tweetsRoutes  = require("./routes/tweets")(DataHelpers);

const PORT          = 8080;
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/tweets", tweetsRoutes);

app.listen(PORT, () => {
  const serverStartTimestamp = new Date;
  const serverStartedTimestamp = moment(serverStartTimestamp).format('MMMM Do YYYY, h:mm:ss a');
  console.log('Tweeter server started at ' + serverStartedTimestamp + ' UTC');
  console.log(`Tweeter listening on port ${PORT}!`);
});
