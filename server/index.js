import express from "express";
import { createServer } from "http";
import pkg from "colyseus";
const { Server } = pkg;
import { MyRoom } from "./rooms/MyRoom.js";

const port = Number(process.env.PORT) || 3000;
const app = express();

const gameServer = new Server({
    server: createServer(app),
});

gameServer.define("my_room", MyRoom);

app.get("/", (req, res) => {
    res.send("Colyseus server is running!");
});

gameServer.listen(port);
console.log(`🚀 Colyseus server is listening on ws://localhost:${port}`);
