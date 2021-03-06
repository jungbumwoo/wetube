import express from "express";
import routes from "../routers";
import { users, userDetail, editProfile, changePassword } from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);


export default userRouter;