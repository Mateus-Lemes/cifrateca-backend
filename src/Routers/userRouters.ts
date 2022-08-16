import { Router } from "express";
import { signUpController, signInController } from "../Controllers/userControllers.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { userSchema } from "../Schemas/userSchema.js";

const  userRouters = Router();

userRouters.post("/signup", schemaValidation(userSchema), signUpController)
userRouters.post("/signin", schemaValidation(userSchema), signInController)

export default userRouters