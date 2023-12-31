import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";
import path from "path";

import initApi from "./api/index.js";
import updater from "./lib/server/updater.js";

const PORT = 1930;

const app = express();
const server = http.createServer(app);

const dirname = process.cwd();
const publicPath = path.join(dirname, "public");

app.use("/lib/client", express.static(path.join(dirname, "lib/client")));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(publicPath));

updater(server, publicPath);

const main = async () => {
  await initApi(app);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
  });
};

main();
