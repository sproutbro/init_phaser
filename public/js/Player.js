export default class Player {
  constructor(player, phaser) {
    this.nickname = player.nickname;
    this.energy = player.energy;
    this.mana = player.mana;
    this.speed = player.speed;
    this.destination = null;
    const { x, y, key } = player.sprite;
    this.physics = phaser.physics;
    this.input = phaser.input;
    this.anims = this.physics.add.sprite(x, y, key);
    this.anims.setScale(2);
    this.anims.play("orc1_idle", true);
    this.input.on("pointerdown", this.onPointerDown.bind(this));
  }

  onPointerDown(pointer) {
    this.destination = new Phaser.Math.Vector2(pointer.worldX, pointer.worldY);

    const distanceX = this.destination.x - this.anims.x;
    const distanceY = this.destination.y - this.anims.y;

    const angle = Math.atan2(distanceY, distanceX);
    this.anims.setVelocity(
      Math.cos(angle) * this.speed,
      Math.sin(angle) * this.speed
    );

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      if (distanceX > 0) {
        this.anims.play("orc1_right", true);
      } else {
        this.anims.play("orc1_left", true);
      }
    } else {
      if (distanceY > 0) {
        this.anims.play("orc1_down", true);
      } else {
        this.anims.play("orc1_up", true);
      }
    }
  }

  update(player) {
    if (player?.destination) {
      const distance = Phaser.Math.Distance.Between(
        player.anims.x,
        player.anims.y,
        player.destination.x,
        player.destination.y
      );
      if (distance < 4) {
        player.anims.setVelocity(0, 0);
        player.destination = null;
      }
    }
  }
}
