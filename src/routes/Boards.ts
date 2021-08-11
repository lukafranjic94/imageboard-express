import { BoardDao } from "@daos/Board/BoardDao";
import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import { Board } from "@entities/Board";
import { databaseQueryError, resourceNotFoundError } from "@shared/constants";

const boardDao = new BoardDao();

export async function getAllBoards(req: Request, res: Response) {
  try {
    const boards: Board[] = await boardDao.getAll();
    return res.status(StatusCodes.OK).json({ boards });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: databaseQueryError,
    });
  }
}

export async function getOneBoard(req: Request, res: Response) {
  const shortName: string = req.params.short_name;
  try {
    const board: Board | null = await boardDao.getOne(shortName);
    if (!board) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: resourceNotFoundError,
      });
    }
    return res.status(StatusCodes.OK).json({ board });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: databaseQueryError,
    });
  }
}
