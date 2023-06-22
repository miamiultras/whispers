export interface Path {
  id: string;
  text: string;
  next: string;
}

export interface GameState {
  id: string;
  text: string;
  paths: Path[];
}
