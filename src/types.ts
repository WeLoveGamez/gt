export interface Player {
  x: number;
  y: number;
  speed: number;
  size: number;
  score: number;
  id: string;
  color: string;
  survived: number;
  doesMove: (
    direction: "down" | "up" | "right" | "left",
    pressedKeys: Record<string, boolean>,
    AIInfo: AIInfo
  ) => boolean;
}
export interface AIInfo {
  enemies: Enemy[];
  items: Item[];
  border: [up: number, down: number, right: number, left: number];
  player: Player;
}

export interface Enemy {
  x: number;
  y: number;
  size: number;
  id: string;
  type: string;
  imgsrc: string;
  moveVektor: number[];
  timer: number | null;
  targetPlayerId: Player["id"];
}
export interface Item {
  type: string;
  imgsrc: string;
  x: number;
  y: number;
  size: number;
  timer: number;
}
export interface SkillTree {
  skillPoints: number;
  usedSkillPoints: number;
  skills: Skill[];
}
export interface Skill {
  name: string;
  lvl: number;
  maxlvl: number;
}
