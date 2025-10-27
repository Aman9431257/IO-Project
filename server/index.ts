import express from "express";
import { createServer } from "http";
import { Server } from "colyseus";
import { MyRoom } from "./rooms/MyRoom.js";

const port = process.env.PORT || 2567;
const app = express();

const gameServer = new Server({
    server: createServer(app),
});

// Register a Colyseus room
gameServer.define("my_room", MyRoom);

// Serve static files or use an API route if you want
app.get("/", (req, res) => {
    res.send("Colyseus server is running!");
});

// Start server
gameServer.listen(port);
console.log(`🚀 Colyseus server is listening on ws://localhost:${port}`);