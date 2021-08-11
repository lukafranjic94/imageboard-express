import { connection } from "@daos/mariadb/mariadb";
import { Board, IBoard } from "@entities/Board";

export interface IBoardDao {
  getOne: (shortName: string) => Promise<Board | null>;
  getAll: () => Promise<Board[]>;
}

export class BoardDao implements IBoardDao {
  public getOne(shortName: string): Promise<Board | null> {
    return new Promise<Board | null>((resolve, reject) => {
      const sql: string = "SELECT * FROM boards WHERE short_name = ?";
      connection.query(sql, [shortName], (error, results: IBoard[]) => {
        if (error) {
          reject(error);
          return;
        }
        if (!results[0]) {
          resolve(null);
          return;
        }
        const board: Board = new Board(results[0]);
        resolve(board);
      });
    });
  }
  public getAll(): Promise<Board[]> {
    return new Promise<Board[]>((resolve, reject) => {
      const sql: string = "SELECT * FROM boards";
      connection.query(sql, (error, results: IBoard[]) => {
        if (error) {
          reject(error);
          return;
        }
        const boards: Board[] = results.map(
          (rawboard: IBoard) => new Board(rawboard)
        );
        resolve(boards);
      });
    });
  }
}
