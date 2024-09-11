import { createAnimations } from "./animations.js";
import Player from "./Player.js";
import { createSpritesheet } from "./spritesheet.js";
import { createMaps } from "./map.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {
  createSpritesheet.call(this);
  this.load.image("tiles", "assets/towerDefense_tilesheet.png");
  this.load.tilemapTiledJSON("map", "assets/tilemap.json");
}

function create() {
  const { mapWidth, mapHeight } = createMaps.call(this);
  createAnimations.call(this);

  this.socket = io();
  const socket = this.socket;
  socket.on("init", (player) => init(player));
  socket.on("players", (players) => onPlayers(players));
  socket.on("player", (player) => onPlayer(player));

  const onPlayers = (players) => {
    delete players[socket.id];
    this.players = this.add.group();
    for (const [id, playerData] of Object.entries(players)) {
      players[id] = this.add
        .sprite(playerData.sprite.x, playerData.sprite.y, playerData.sprite.key)
        .setScale(2);
      players[id].anims.play("orc1_idle", true);
      players[id].id = id;
      this.players.add(players[id]);
      players[id].setPosition(playerData.sprite.x, playerData.sprite.y);
    }
  };

  const onPlayer = (player) => {
    const { x, y, key, id } = player;
    this.players.getChildren().forEach((player) => {
      if (player.id === id) {
        player.anims.play(key);
        player.setPosition(x, y);
      }
    });
  };

  const init = async (player) => {
    this.player = new Player(await player, this);
    this.cameras.main.setBounds(0, 0, mapWidth, mapHeight);
    this.cameras.main.startFollow(this.player.anims);
  };
}

function update() {
  if (this.player) {
    this.player.update(this.player, this.socket);
    if (this.player?.destination) {
      this.socket.emit("player", {
        x: this.player.anims.x,
        y: this.player.anims.y,
        key: this.player.anims.anims.currentAnim.key,
      });
    }
  }

  if (this.players) {
    this.players.getChildren().forEach((player) => {});
  }
}
