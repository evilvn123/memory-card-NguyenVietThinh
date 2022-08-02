export enum Status {
  FACE_UP = "FACE_UP",
  FACE_DOWN = "FACE_DOWN",
  LOCK = "LOCK",
}

export interface ICard {
  id: number;
  value: string;
  image: string;
  status: Status;
}
