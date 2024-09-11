export default class EntityHandler {
  constructor(io) {
    this.io = io;
    this.socket = {};
    this.players = {};
  }

  map = { width: 1920, height: 1280 };
  player = {
    nickname: Math.random().toString(),
    energy: 100,
    mana: 50,
    speed: 500,
    sprite: { x: this.map.width / 2, y: this.map.height / 2, key: "orc1_idle" },
  };

  initSocket(socket) {
    this.socket[socket.id] = socket;
    this.players[socket.id] = new Player(this.player);
    this.socket[socket.id].emit("init", this.players[socket.id]);
    this.socket[socket.id].emit("players", this.players);
  }

  onPlayer(socket) {
    this.socket[socket.id].on("player", (player) => {
      player.id = socket.id;
      this.emitPlayer(this.socket[socket.id], player);
    });
  }

  emitPlayer(socket, player) {
    socket.broadcast.emit("player", player);
  }

  disconnect(socket) {
    this.socket[socket.id].on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      delete this.players[socket.id];
      this.io.emit("players", this.players);
    });
  }

  insertEnemy() {
    this.enemies.push(new Enemy());
  }
}

class Player {
  constructor(player) {
    this.nickname = player.nickname;
    this.energy = player.energy;
    this.mana = player.mana;
    this.speed = player.speed;
    const { x, y, key } = player.sprite;
    this.sprite = { x, y, key };
  }
}

class Enemy {
  constructor(energy = 100, mana = 50) {
    this.x = Math.random() * mapWidth;
    this.y = Math.random() * mapHeight;
    this.energy = energy;
    this.mana = mana;
  }
}
