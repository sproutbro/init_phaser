export function createSpritesheet() {
  this.load.spritesheet("orc1_idle", "assets/orc1_idle_full.png", {
    frameWidth: 64,
    frameHeight: 64,
  });
  this.load.spritesheet("orc1_walk", "assets/orc1_walk_full.png", {
    frameWidth: 64,
    frameHeight: 64,
  });
  this.load.spritesheet("orc2_idle", "assets/orc2_idle_full.png", {
    frameWidth: 64,
    frameHeight: 64,
  });
  this.load.spritesheet("orc2_walk", "assets/orc2_walk_full.png", {
    frameWidth: 64,
    frameHeight: 64,
  });
  this.load.spritesheet("zombie", "assets/character_zombie_sheet.png", {
    frameWidth: 96,
    frameHeight: 128,
  });
}
