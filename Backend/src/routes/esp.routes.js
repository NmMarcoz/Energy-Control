import { Router } from "express"
import espController from "../controllers/esp.controller.js";
import { validUser, validId,isAuth } from "../middlewares/global.middleware.js";
import userController from "../controllers/user.controller.js";

const router = Router()

router.post("/", isAuth, espController.createEsp)
router.get("/", espController.findAllEsp)
router.get('/', userController.findByIdAlternative)

export default router

