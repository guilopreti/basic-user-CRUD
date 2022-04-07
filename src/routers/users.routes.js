import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listProfileController from "../controllers/listProfile.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";

import verifyDataTypeMiddleware from "../middlewares/verifyDataType.middleware";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import verifyTokenAdmMiddleware from "../middlewares/verifyTokenAdm.middleware";
import verifyTokenAndUserIdMiddleware from "../middlewares/verifyTokenAndUserId.middleware";

const router = Router();

router.post(
  "",
  verifyDataTypeMiddleware,
  verifyEmailMiddleware,
  createUserController
);
router.get("", verifyTokenAdmMiddleware, listUsersController);
router.patch("/:uuid", verifyTokenAndUserIdMiddleware, updateUserController);
router.delete("/:uuid", verifyTokenAndUserIdMiddleware, deleteUserController);
router.get("/profile", verifyTokenMiddleware, listProfileController);

export default router;
