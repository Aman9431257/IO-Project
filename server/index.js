import express from "express";
import { createServer } from "http";
import { Server } from "colyseus";
import { MyRoom } from "./rooms/MyRoom.js";

const port = Number(process.env.PORT) || 2567;
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
