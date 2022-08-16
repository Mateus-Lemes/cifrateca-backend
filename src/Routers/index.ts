import { Router } from "express";
import chordsRouters from "./chordsRouters.js";
import userRouters from "./userRouters.js";

const router = Router();

router.use(userRouters);
router.use(chordsRouters);

export default router;