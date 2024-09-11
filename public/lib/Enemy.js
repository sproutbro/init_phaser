export default class Enemy {
  constructor(phaser, x, y, energy, mana) {
    this.x = x;
    this.y = y;
    this.enemy = phaser.physics.add.sprite(x, y, "zombie");
    this.enemy.setScale(2);
    this.enemy.speed = 500;
    this.enemy.energy = energy;
    this.enemy.mana = mana;
    this.init(phaser);
  }

  init(phaser) {
    phaser.physics.add.collider(this.enemy, phaser.player);
  }

  update(player) {
    const distanceX = player.x - enemy.x;
    const distanceY = player.y - enemy.y;
    const angle = Math.atan2(distanceY, distanceX);
    enemy.setVelocity(
      Math.cos(angle) * enemy.speed,
      Math.sin(angle) * enemy.speed
    );
  }
}
