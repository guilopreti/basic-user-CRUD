import { Router } from "express";
import loginUserController from "../controllers/loginUser,controller";

const router = Router();

router.post("", loginUserController);

export default router;
