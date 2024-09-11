import express from "express";
import http from "http";
import EntityHandler from "./handler/EntityHandler.js";
import { Server } from "socket.io";

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);

const io = new Server(server);
const entityHandler = new EntityHandler(io);
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  entityHandler.initSocket(socket);
  entityHandler.onPlayer(socket);
  entityHandler.disconnect(socket);
});

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
