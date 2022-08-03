import { Router } from "express";

import UsersController from "../controllers/users.controller";

import verifyDataTypeMiddleware from "../middlewares/verifyDataType.middleware";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import verifyTokenAdmMiddleware from "../middlewares/verifyTokenAdm.middleware";
import verifyTokenAndUserIdMiddleware from "../middlewares/verifyTokenAndUserId.middleware";

const usersController = new UsersController();

const router = Router();

router.post(
  "",
  verifyDataTypeMiddleware,
  verifyEmailMiddleware,
  usersController.store
);
router.get("", verifyTokenAdmMiddleware, usersController.index);
router.patch("/:uuid", verifyTokenAndUserIdMiddleware, usersController.update);
router.delete("/:uuid", verifyTokenAndUserIdMiddleware, usersController.delete);
router.get("/profile", verifyTokenMiddleware, usersController.show);

export default router;
