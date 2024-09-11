export function createAnimations() {
  this.anims.create({
    key: "orc1_idle",
    frames: this.anims.generateFrameNumbers("orc1_idle", {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "orc1_left",
    frames: this.anims.generateFrameNumbers("orc1_walk", {
      start: 12,
      end: 17,
    }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "orc1_right",
    frames: this.anims.generateFrameNumbers("orc1_walk", {
      start: 18,
      end: 23,
    }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "orc1_up",
    frames: this.anims.generateFrameNumbers("orc1_walk", {
      start: 6,
      end: 11,
    }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "orc1_down",
    frames: this.anims.generateFrameNumbers("orc1_walk", {
      start: 0,
      end: 5,
    }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "walk",
    frames: this.anims.generateFrameNumbers("zombie", {
      start: 36,
      end: 43,
    }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "orc2_idle",
    frames: this.anims.generateFrameNumbers("orc2_idle", {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
}
