import { Router } from "express";
import { getAllBoards, getOneBoard } from "./Boards";
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from "./Users";

// User-route
const userRouter = Router();
userRouter.get("/all", getAllUsers);
userRouter.post("/add", addOneUser);
userRouter.put("/update", updateOneUser);
userRouter.delete("/delete/:id", deleteOneUser);

// Board-route
const boardRouter = Router();
boardRouter.get("/all", getAllBoards);
boardRouter.route("/:short_name").get(getOneBoard);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/users", userRouter);
baseRouter.use("/boards", boardRouter);
export default baseRouter;
