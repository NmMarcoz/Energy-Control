import { Router } from "express"
import userController from "../controllers/user.controller.js"
import { validUser, validId,isAuth } from "../middlewares/global.middleware.js";

const router = Router();

router.get("/", userController.findAll);
router.get("/:id", validId, validUser, userController.findById);
router.post("/", userController.create);

export default router