export interface IBoard {
  id: number;
  full_name: string;
  short_name: string;
}

export class Board {
  public id: number;
  public full_name: string;
  public short_name: string;

  constructor(rawBoard: IBoard) {
    this.id = rawBoard.id;
    this.full_name = rawBoard.full_name;
    this.short_name = rawBoard.short_name;
  }
}
