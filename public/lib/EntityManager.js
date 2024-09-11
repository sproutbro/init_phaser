import Friend from "./Friend.js";
import Enemy from "./Enemy.js";
import Player from "../js/Player.js";

export default class EntityManager {
  constructor(phaser, mapWidth, mapHeight) {
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.physics = phaser.physics;
    this.input = phaser.input;
    this.cameras = phaser.cameras;
    this.Player = phaser.player;
    this.players = [];
  }

  insertPlayer(player) {}

  updatePlayers(players) {
    this.players = {};
    if (Object.keys(players).length) {
      Object.keys(players).forEach((key, index) => {
        const { x, y, energy, mana } = players[key];
        this.players[key] = new Friend(this.phaser, x, y, energy, mana).player;
      });
    }
  }

  updateEnemies(enemies) {
    this.enemies.getChildren().forEach((enemy) => enemy.destroy());
    enemies.forEach((enemyData) => {
      const { x, y, energy, mana } = enemyData;
      const enemy = this.phaser.add.sprite(x, y, "zombie").setScale(1.5);
      this.enemies.add(enemy);
    });
    console.log(this.enemies);
  }

  update(player) {
    if (Object.keys(this.players).length) {
      Object.keys(this.players).forEach((key, index) => {
        this.players[key].update(this.players[key]);
      });
    }
    if (this.enemies.length) {
      this.enemies.forEach((enemy, index) => {
        enemy.update(player);
      });
    }
  }
}
