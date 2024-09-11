export default class Friend {
  constructor(phaser, x, y, energy, mana) {
    this.player = phaser.physics.add.sprite(x, y, "orc2_idle");
    this.player.setScale(2);
    this.player.energy = energy;
    this.player.mana = mana;
    this.player.update = this.update;
  }
  update(player) {
    player.anims.play("orc2_idle", true);
  }
}
