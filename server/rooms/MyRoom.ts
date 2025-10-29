import { Room } from "colyseus";

export class MyRoom extends Room {
  onCreate(options: any) {
    console.log("Room created:", this.roomId);
  }

  onJoin(client: any, options: any) {
    console.log("Client joined:", client.sessionId);
  }

  onLeave(client: any, consented: any) {
    console.log("Client left:", client.sessionId);
  }

  onDispose() {
    console.log("Room disposed:", this.roomId);
  }
}