import { Router } from "express";

import UsersController from "../controllers/users.controller.js";

import verifyDataTypeMiddleware from "../middlewares/verifyDataType.middleware.js";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware.js";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware.js";
import verifyTokenAdmMiddleware from "../middlewares/verifyTokenAdm.middleware.js";
import verifyTokenAndUserIdMiddleware from "../middlewares/verifyTokenAndUserId.middleware.js";

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
