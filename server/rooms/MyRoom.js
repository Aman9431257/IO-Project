import { Room } from "colyseus";

export class MyRoom extends Room {
  onCreate(options) {
    console.log("Room created:", this.roomId);
  }

  onJoin(client, options) {
    console.log("Client joined:", client.sessionId);
  }

  onLeave(client, consented) {
    console.log("Client left:", client.sessionId);
  }

  onDispose() {
    console.log("Room disposed:", this.roomId);
  }
}
