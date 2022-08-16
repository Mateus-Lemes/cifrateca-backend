import { Router } from "express";
import { createChordsController, getAllChordsByUserIdController } from "../Controllers/chordsControllers.js";
import { authValidation } from "../Middlewares/authValidation.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { chordSchema } from "../Schemas/chordsSchema.js";

const chordsRouters = Router();

chordsRouters.post("/chords", authValidation, schemaValidation(chordSchema), createChordsController)
chordsRouters.get("/chords", authValidation, getAllChordsByUserIdController);

export default chordsRouters;